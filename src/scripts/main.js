import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import "./auth/LoginForm.js"
import "./auth/RegisterForm.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
                write function to check session storage for 'active user' if true show dashboard page if not true run LoginForm and RegisterForm
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/

