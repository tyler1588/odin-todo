function displayTodo() {
    const container = document.querySelector('.container');

    const todos = document.createElement('table');
    container.appendChild(todos);

    const tr = document.createElement('tr');
    todos.appendChild(tr);

    const td = document.createElement('td');
    td.innerHTML = "hi"
    tr.appendChild(td);
}

export default displayTodo