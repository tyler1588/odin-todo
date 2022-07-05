import todoArray from "./todoArray";

function submitTodo() {
    const form = document.querySelector('.todo-input-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const modal = document.querySelector('.modal');
        modal.close();
        const formdata = new FormData(form);
        const input = formdata.get('todo');
        todoArray.push(input)
        alert(todoArray)
    });
};

export default submitTodo