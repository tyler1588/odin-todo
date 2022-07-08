let projectArray = [];
if (JSON.parse(window.localStorage.getItem("projects")) != null){
    todoArray = JSON.parse(window.localStorage.getItem("projects"));
}

export default projectArray