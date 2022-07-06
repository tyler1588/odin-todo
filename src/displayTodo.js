function displayTodo() {
    const container = document.querySelector('.container');
    const userTodos = JSON.parse(window.localStorage.getItem("userTodos"));

    const todos = document.createElement('table');
    container.appendChild(todos);

    console.log(userTodos);

    if (userTodos){
        for (let i = 0; i < userTodos.length; i++){
            const tr = document.createElement('tr');
            todos.appendChild(tr);
    
            const td = document.createElement('td');
            td.innerHTML = userTodos[i];
            tr.appendChild(td);
        }
    }    
}

export default displayTodo