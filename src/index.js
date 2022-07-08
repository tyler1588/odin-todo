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


window.onload = function(){
    navbar();
    displayProjects();
    selectProject();
    displayTodo();
    todoModal();
    projectModal();
    submitTodo();
    submitProject();
    deleteTodo();
    
    
}


// localStorage.clear()




