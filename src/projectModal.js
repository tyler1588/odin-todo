function projectModal(){
    const container = document.querySelector('.container');

    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    container.appendChild(modal);

    const modalForm = document.createElement('form');
    modalForm.classList.add('project-input-form');
    modal.appendChild(modalForm);

    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.name = 'project';
    modalForm.appendChild(projectInput);

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