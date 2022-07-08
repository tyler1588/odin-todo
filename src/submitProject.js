import projectArray from "./projectArray";
import createProject from "./createProject";

function submitProject() {
    const form = document.querySelector('.project-input-form');
    
    form.addEventListener('submit', () => {
        const formdata = new FormData(form);
        const input = formdata.get('project');

        let projectCounter = 0;
        if (JSON.parse(window.localStorage.getItem("userProjects")) != null){
            let currentCount = JSON.parse(window.localStorage.getItem("userProjects"));
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