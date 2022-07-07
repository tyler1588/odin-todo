import deleteIcon from './assets/deleteIcon.svg'

function displayTodo() {
    const container = document.querySelector('.container');
    let userTodos = JSON.parse(window.localStorage.getItem("userTodos"));
    
    const todoContainer = document.createElement('div');
    todoContainer.classList.add("todoContainer");
    container.appendChild(todoContainer);

    if (userTodos){
        for (let i = 0; i < userTodos.length; i++){
            const todo = document.createElement('div');
            todo.classList.add("todo");
            todo.setAttribute('id', userTodos[i].key);
            todoContainer.appendChild(todo);
    
            const todoText = document.createElement('h3');
            todoText.innerHTML = userTodos[i].text;
            todo.appendChild(todoText);
            
            const deleteButton = new Image();
            deleteButton.src = deleteIcon;
            deleteButton.classList.add("deleteButton");
            todo.appendChild(deleteButton);

        }
    }    
}

export default displayTodo