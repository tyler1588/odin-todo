let todoArray = [];
if (JSON.parse(window.localStorage.getItem("userTodos")) != null){
    todoArray = JSON.parse(window.localStorage.getItem("userTodos"));
}

export default todoArray
