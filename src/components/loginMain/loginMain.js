import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoginMain extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            empName: "",
            empWeight: "",
            empPass: "",
            loginStatus: "",
            token: ""
        }
    }

    handleSubmit(event){
      const self = this;
        event.preventDefault();

        fetch(`http://localhost:8080/loginUser`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              empName: this.state.empName,
              empPass: this.state.empPass
            })
        })
        .then(res => res.json())
        .then(data => {
            self.setState({token: data.token});
            self.setState({loginStatus: 'Logged in'});
            localStorage.setItem('token', self.state.token);
            self.props.history.push('/home');
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
                            <input type="text" name="empName" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="text" name="empPass" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                      <span>
                        {this.state.empName} is {this.state.loginStatus}
                      </span>
                    </div>
                </form>
            </main>
        )
    }
}

export default withRouter(LoginMain);
