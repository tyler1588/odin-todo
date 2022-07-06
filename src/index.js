import navbar from './navbar';
import modal from './modal';
import './styles.css';
import submitTodo from './submitTodo';
import displayTodo from './displayTodo';
import deleteTodo from './deleteTodo';


window.onload = function(){
    navbar();
    modal();
    submitTodo();
    displayTodo();
    deleteTodo();
}


// localStorage.clear()




