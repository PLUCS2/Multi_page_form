import React from "react"; 
import ReactDOM from "react-dom"; 

const App = () => {
    return (
        <div>This is a React App</div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root); 
});
