import projectArray from "./projectArray";
import createProject from "./createProject";

function submitProject() {
    const form = document.querySelector('.project-input-form');
    
    form.addEventListener('submit', () => {
        const formdata = new FormData(form);
        const input = formdata.get('project');

        let projectCounter = 1;
        if (JSON.parse(window.localStorage.getItem("projectCounter")) != null){
            projectCounter = JSON.parse(window.localStorage.getItem("projectCounter"));
            projectCounter = projectCounter + 1;
        }

        window.localStorage.setItem("projectCounter", JSON.stringify(projectCounter));
        let key = JSON.parse(window.localStorage.getItem("projectCounter"));


        const project = new createProject(key, input);

        projectArray.push(project);

        window.localStorage.setItem("userProjects", JSON.stringify(projectArray));


    });
};

export default submitProject