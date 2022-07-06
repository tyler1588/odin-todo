import todoArray from "./todoArray";

function deleteTodo(){
    let userTodos = JSON.parse(window.localStorage.getItem("userTodos"));
    document.body.addEventListener('click', function(event) {
        if (event.target.className === 'todo'){
            for (let i = 0; i < userTodos.length; i++){
                if (event.target.id == userTodos[i].key){
                    //Create temporary array with selected element removed
                    let newArray = userTodos.filter(function(el) {
                        return el.key != event.target.id
                    })

                    //Update local storage to store the new array
                    window.localStorage.setItem("userTodos", JSON.stringify(newArray));
                    userTodos = JSON.parse(window.localStorage.getItem("userTodos"));

                    //Remove elemts from DOM
                    const element = document.getElementById(event.target.id);
                    element.parentElement.remove();
                    window.location.reload();
                }
            }
        }
    })
}

export default deleteTodo