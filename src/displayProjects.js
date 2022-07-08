function displayProjects(){
    const container = document.querySelector('.container');

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add("projectsContainer");
    container.appendChild(projectsContainer);

    const header = document.createElement('h2');
    header.innerHTML = 'Projects';
    projectsContainer.appendChild(header);

    const inbox = document.createElement('h3');
    inbox.innerHTML = 'Index';
    projectsContainer.appendChild(inbox);

}

export default displayProjects