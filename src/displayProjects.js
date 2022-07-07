function displayProjects(){
    const container = document.querySelector('.container');

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add("projectsContainer");
    container.appendChild(projectsContainer);

}

export default displayProjects