import React from "react"; 
import ReactDOM from "react-dom"; 
import AuthForm from "./multi_form_auth"; 

const App = () => {
    return (
        <div>
            <AuthForm /> 
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root); 
});
