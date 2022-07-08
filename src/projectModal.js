function projectModal(){
    const container = document.querySelector('.container');

    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    container.appendChild(modal);

    const modalForm = document.createElement('form');
    modalForm.classList.add('project-input-form');
    modal.appendChild(modalForm);

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.name = 'project';
    modalForm.appendChild(todoInput);

    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit';
    formSubmit.value = 'Submit';
    modalForm.appendChild(formSubmit);

    const openModal = document.querySelector('.open-project-modal');

    openModal.addEventListener('click', () => {
        modal.showModal();
    })
}

export default projectModal