import navbar from './navbar';
import todoModal from './todoModal';
import './styles.css';
import submitTodo from './submitTodo';
import displayTodo from './displayTodo';
import deleteTodo from './deleteTodo';
import displayProjects from './displayProjects';
import projectModal from './projectModal';
import submitProject from './submitProject';
import selectProject from './selectProject';
import deleteProject from './deleteProject';


window.onload = function(){

    navbar();
    displayProjects();

    const selection = sessionStorage.getItem('selection');

    if (selection){
        displayTodo(selection);

    } else {
        displayTodo("Inbox");
    }

    selectProject();
    todoModal();
    projectModal();
    submitTodo();
    submitProject();
    deleteTodo();
    deleteProject();
    
}


// localStorage.clear()




