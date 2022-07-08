import deleteIcon from './assets/deleteIcon.svg'

function displayProjects(){
    const container = document.querySelector('.container');
    let userProjects = JSON.parse(window.localStorage.getItem("userProjects"));

    console.log(userProjects);

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

    if (userProjects){
        for (let i = 0; i < userProjects.length; i++){
            const project = document.createElement('div');
            project.classList.add("project");
            project.setAttribute('id', userProjects[i].key);
            projectSection.appendChild(project);
    
            const projectText = document.createElement('h3');
            projectText.innerHTML = userProjects[i].name;
            project.appendChild(projectText);
            
            const deleteButton = new Image();
            deleteButton.src = deleteIcon;
            deleteButton.classList.add("deleteButton");
            project.appendChild(deleteButton);

        }
    }    

}

export default displayProjects