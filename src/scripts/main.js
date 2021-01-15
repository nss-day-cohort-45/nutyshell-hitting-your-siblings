import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import "./Nutshell.js"
import { newsForm } from "./news/newsForm.js"
import { NewsList } from "./news/newsList.js"
import { EventList } from './events/eventList.js'
import { EventForm } from "./events/eventForm.js"
import { TaskList } from "./Tasks/TaskList.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { MessageForm } from "./messages/messageForm.js"
import { MessageList } from "./messages/messageList.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
                write function to check session storage for 'active user' if true show dashboard page if not true run LoginForm and RegisterForm
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
// LoginForm();
// RegisterForm();


const eventHub = document.querySelector('.container');

eventHub.addEventListener('userAuthenticated', Nutshell);

if (!sessionStorage.getItem('activeUser')) {
  LoginForm();
  RegisterForm();
} else {
  Nutshell();
}

// EventForm()
// EventList()
// LoginForm()
// RegisterForm()
// NewsList()
// newsForm()
// MessageList()
// MessageForm()
