import navbar from './navbar';
import modal from './modal';
import './styles.css';
import submitTodo from './submitTodo';
import displayTodo from './displayTodo';
import deleteTodo from './deleteTodo';
import displayProjects from './displayProjects';


window.onload = function(){
    navbar();
    displayProjects();
    displayTodo();
    modal();
    submitTodo();
    deleteTodo();
}


// localStorage.clear()




