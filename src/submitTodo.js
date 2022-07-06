import todoArray from "./todoArray";
import createTodo from "./createTodo";

function submitTodo() {
    const form = document.querySelector('.todo-input-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const modal = document.querySelector('.modal');
        modal.close();
        const formdata = new FormData(form);
        const input = formdata.get('todo');

        const todo = new createTodo(input);

        todoArray.push(todo);

        window.localStorage.setItem("userTodos", JSON.stringify(todoArray));

        const todos = document.querySelector('table');

        const tr = document.createElement('tr');
        todos.appendChild(tr);

        const td = document.createElement('td');
        td.innerHTML = input;
        td.classList.add(todoArray.length-1);
        tr.appendChild(td);

    });
};

export default submitTodo