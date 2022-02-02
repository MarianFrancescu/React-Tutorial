import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            username: "",
            password: ""
        }
    }
    
    handleSubmit(event){
        event.preventDefault();

        fetch(`http://localhost:3030/customers?username=${encodeURIComponent(this.state.username)}`, {
            method: 'GET',
        })
        .then(dat => dat.json())
        .then(data => {
            if(data[0].password === this.state.password){
                localStorage.setItem("validUser", data[0].username);
                this.props.history.push('/home');
            } else {
                console.log("Invalid login");
            }
        })
        .catch(err => console.log("Error post ", err.message));
    }

    handleFieldChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

    render(){
        return(
            <main>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name: 
                            <input type="text" name="username" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: 
                            <input type="text" name="password" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </main>
        )
    }
}

export default withRouter(Main);