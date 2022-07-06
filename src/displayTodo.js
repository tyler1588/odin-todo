function displayTodo() {
    const container = document.querySelector('.container');
    let userTodos = JSON.parse(window.localStorage.getItem("userTodos"));
    
    const todos = document.createElement('table');
    container.appendChild(todos);

    if (userTodos){
        for (let i = 0; i < userTodos.length; i++){
            const tr = document.createElement('tr');
            todos.appendChild(tr);
    
            const td = document.createElement('td');
            td.innerHTML = userTodos[i].text;
            td.classList.add("todo");
            td.setAttribute('id', userTodos[i].key);
            tr.appendChild(td);

        }
    }    
}

export default displayTodo