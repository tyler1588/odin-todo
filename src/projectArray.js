import createProject from "./createProject";

let projectArray = []

if (JSON.parse(window.localStorage.getItem("userProjects")) != null){
    projectArray = JSON.parse(window.localStorage.getItem("userProjects"));
}


export default projectArray