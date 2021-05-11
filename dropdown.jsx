import React from "react"; 

class Dropdown extends React.Component {
    //not for a form dropdown, for a dropdown menu with options like logout or view profile

    constructor(props){
        this.state = {
            drop: false 
        }
        this.clicker.bind(this)
    }

    clicker(e) {
        this.setState(drop, true)
    }

    leave(e) {
        this.setState(drop, false)
    }

    render () {
        return (
        <button onFocus={this.clicker} onBlur={this.leave}> 
            <ul className={this.state ? reveal : hide}> 
            {/* this css should be styled to hide or to reveal the UL  */}
                <li>This is within the dropdown</li> 
            </ul>
        </button> 
        )
    }
}