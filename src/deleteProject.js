import projectArray from './projectArray'

export default function deleteProject(){
    let userProjects = JSON.parse(window.localStorage.getItem("userProjects"));
    document.body.addEventListener('click', function(event) {
        if (event.target.className === 'deleteProjectButton'){
            for (let i = 0; i < userProjects.length; i++){
                if (event.target.parentElement.id == userProjects[i].key){
                    //Create temporary array with selected element removed
                    let newArray = userProjects.filter(function(el) {
                        return el.key != event.target.parentElement.id
                    })

                    //Update local storage to store the new array
                    window.localStorage.setItem("userProjects", JSON.stringify(newArray));
                    userProjects = JSON.parse(window.localStorage.getItem("userProjects"));

                    //Remove elemts from DOM
                    const element = document.getElementById(event.target.parentElement.id);
                    element.remove();
                    window.location.reload();
                }
            }
        }
    })
}