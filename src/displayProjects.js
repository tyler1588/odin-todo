function displayProjects(){
    const container = document.querySelector('.container');

    const projectSection = document.createElement('div');
    projectSection.classList.add("projectSection");
    container.appendChild(projectSection);

    const projectHeadSection = document.createElement('div');
    projectHeadSection.classList.add("projectHeadSection");
    projectSection.appendChild(projectHeadSection);

    const header = document.createElement('h2');
    header.innerHTML = 'Projects';
    projectHeadSection.appendChild(header);

    const button = document.createElement('button');
    button.innerHTML = '+ Add Project';
    button.classList.add('open-project-modal');
    projectHeadSection.appendChild(button);

    const inbox = document.createElement('h3');
    inbox.innerHTML = 'Index';
    projectSection.appendChild(inbox);

}

export default displayProjects