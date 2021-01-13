import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import "./Nutshell.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
                write function to check session storage for 'active user' if true show dashboard page if not true run LoginForm and RegisterForm
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
// const DashBoard = (user) => {
//     if ( sessionStorage.getItem("activeUser", user.id) ==! 0) {
//         Nutshell()
//     }
//     else {
//         LoginForm(),
//         RegisterForm()
//     }
// }


// DashBoard();

LoginForm()
RegisterForm()
