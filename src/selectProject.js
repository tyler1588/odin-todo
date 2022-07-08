import displayTodo from "./displayTodo";

export default function selectProject(){
    let selectedProject = document.getElementsByClassName("project")[0].firstChild.innerHTML;

    document.body.addEventListener('click', function(event){
        if (event.target.className === "project"){
            selectedProject = event.target.firstChild.innerHTML;
        }
        document.querySelector('.selectedProject').innerHTML = selectedProject;
        displayTodo(selectedProject);
    })
    


}