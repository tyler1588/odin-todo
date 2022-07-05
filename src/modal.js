function modal(){
    const container = document.querySelector('.container');

    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.setAttribute('id', 'modal');
    container.appendChild(modal);

    const modalForm = document.createElement('form');
    modal.appendChild(modalForm);

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.name = 'todo';
    modalForm.appendChild(todoInput);

    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit';
    formSubmit.value = 'Submit';
    modalForm.appendChild(formSubmit);

    const openModal = document.querySelector('.open-modal');

    openModal.addEventListener('click', () => {
        modal.showModal();
    })
}

export default modal