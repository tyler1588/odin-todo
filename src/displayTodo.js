import deleteIcon from './assets/deleteIcon.svg'

function displayTodo() {
    const container = document.querySelector('.container');
    let userTodos = JSON.parse(window.localStorage.getItem("userTodos"));
    
    const todoSection = document.createElement('div');
    todoSection.classList.add("todoSection");
    container.appendChild(todoSection);

    const todoHeadSection = document.createElement('div');
    todoHeadSection.classList.add("todoHeadSection");
    todoSection.appendChild(todoHeadSection);

    const header = document.createElement('h2');
    header.innerHTML = 'Inbox';
    todoHeadSection.appendChild(header);

    const button = document.createElement('button');
    button.innerHTML = '+ Add Todo';
    button.classList.add('open-todo-modal');
    todoHeadSection.appendChild(button);

    const todoContainer = document.createElement('div');
    todoContainer.classList.add("todoContainer");
    todoSection.appendChild(todoContainer);

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