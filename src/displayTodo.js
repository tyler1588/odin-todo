import todoArray from "./todoArray";

function displayTodo() {
    const container = document.querySelector('.container');

    const todos = document.createElement('table');
    container.appendChild(todos);

    for (let i = 0; i < todoArray.length; i++){
        const tr = document.createElement('tr');
        todos.appendChild(tr);

        const td = document.createElement('td');
        td.innerHTML = todoArray[i];
        tr.appendChild(td);
    }
}

export default displayTodo