import React from "react"; 

class AuthForm extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            formNum: 0, 
            email: "", 
            fName: "", 
            lName: "", 
            age: 0, 
            location: ""
        }
    }


    render () {
        
        if (this.state.formNum === 0) {
            return (
                <>
                    <h1>Part 1</h1>
                    <input type="text" onChange={this.handleChange("email")} />
                </> 
            )
        }

        if (this.state.formNum === 1) return (
            <h1>Part 2</h1>
        )
    }
}

export default AuthForm; 