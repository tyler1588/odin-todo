import navbar from './navbar';
import todoModal from './todoModal';
import './styles.css';
import submitTodo from './submitTodo';
import displayTodo from './displayTodo';
import deleteTodo from './deleteTodo';
import displayProjects from './displayProjects';
import projectModal from './projectModal';


window.onload = function(){
    navbar();
    displayProjects();
    displayTodo();
    todoModal();
    projectModal();
    submitTodo();
    deleteTodo();
}


// localStorage.clear()




