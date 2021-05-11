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
            location: "", 
            ageError: false
        }; 

        this.handleChange = this.handleChange.bind(this); 
        this.nextForm = this.nextForm.bind(this);
        this.signUp = this.signUp.bind(this); 
        this.customErrorEmail = this.customErrorEmail; 
    }

    handleChange(type) {
        return (e) => {
            e.preventDefault(); 
            this.setState({[type]: e.target.value})
        }
    }

    nextForm(num) {
        return (e) => {
            e.preventDefault(); 
            this.setState({formNum: num})
        }
    }

    signUp(e) {
        e.preventDefault(); 
        //check errors, if there are no errors - 
        if (this.ageErrors() === false) {
            this.setState({ageError: false})
            //send our ajax request via thunk action creator 
            //pass in this.state
        }
        // if there are errors, do nothing 
    }

    ageErrors() {
        if (this.state.age > 18) {
            return false 
        } 
        this.setState({ageError: true})
    }

    customErrorEmail() {
        if (this.state.email.includes(".com")){
            return false;  
        }
        return true; 
    }

    render () {
        
        if (this.state.formNum === 0) {
            return (
                <>
                    <h1>Part 1</h1>
                    <label>Email
                        <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
                    </label>
                    <button onClick={this.nextForm(1)} disabled={this.customErrorEmail()}>Continue</button>
                </> 
            )
        }

        if (this.state.formNum === 1) return (
            <>
                <h1>Part 2</h1>
                <label>Email
                        <input type="text" value={this.state.email} disabled />
                </label>

                <label>First Name 
                        <input type="text" onChange={this.handleChange("fName")} value={this.state.fName} />
                </label>

                <label>Last Name 
                        <input type="text" onChange={this.handleChange("lName")} value={this.state.lName} />
                </label>

                <label>Age
                        <input type="text" onChange={this.handleChange("age")} value={this.state.age} />
                </label>

                <button onClick={this.nextForm(0)}>Go back</button>

                {this.state.ageError ? <p>You are too young to register for this site!</p> : null}

                <button onClick={this.signUp}>Sign Up!</button>
            </>
        )
    }
}

export default AuthForm; 