export default function todoModal(){
    const container = document.querySelector('.container');

    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    container.appendChild(modal);

    const modalForm = document.createElement('form');
    modalForm.classList.add('todo-input-form');
    modal.appendChild(modalForm);

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.name = 'todo';
    modalForm.appendChild(todoInput);

    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit';
    formSubmit.value = 'Submit';
    modalForm.appendChild(formSubmit);

    const openModal = document.querySelector('.open-todo-modal');

    openModal.addEventListener('click', () => {
        modal.showModal();
    })
}