import todoArray from "./todoArray";
import createTodo from "./createTodo";
import selectProject from "./selectProject";

export default function submitTodo() {
    const form = document.querySelector('.todo-input-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formdata = new FormData(form);
        const input = formdata.get('todo');
        const selectedProject = document.querySelector('.selectedProject').innerHTML;

        let todoCounter = 0;
        if (JSON.parse(window.localStorage.getItem("todoCounter")) != null){
            let currentCount = JSON.parse(window.localStorage.getItem("todoCounter"));
            todoCounter = currentCount + 1;
        }

        window.localStorage.setItem("todoCounter", JSON.stringify(todoCounter));
        let key = JSON.parse(window.localStorage.getItem("todoCounter"));

        const todo = new createTodo(key, input, selectedProject);
        todoArray.push(todo);
        window.localStorage.setItem("userTodos", JSON.stringify(todoArray));
        window.location.reload();

        selectProject();
    });
};