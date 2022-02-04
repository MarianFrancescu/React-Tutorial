import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// const jwt = require('jsonwebtoken');
import jwt_decode from "jwt-decode";

class Main extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.state = {
            empName: "",
            empWeight: "",
            loginStatus: "",
            feedback: ""
        }
    }

    componentDidMount(){
      const self = this;
      const rawToken = localStorage.getItem('token');
      const decToken = jwt_decode(rawToken, 'secret');
          if(decToken){
            self.setState({empName: decToken.empName});
            self.setState({loginStatus: "Logged in"});
          }
      // jwt.verify(rawToken, 'secret', (err, decoded) => {
      //   if(err){
      //     self.setState({feedback: 'Failed to authenticate'});
      //   } else {
      //     const decToken = jwt.verify(rawToken, 'secret');
      //     if(decToken){
      //       self.setState({empName: decToken.empName});
      //       self.setState({loginStatus: "Logged in"});
      //     }
      //   }
      // });
    }

    handleSubmit(event){
      const self = this;
        event.preventDefault();

        fetch(`http://localhost:8080/addWeight`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              empName: this.state.empName,
              empWeight: this.state.empWeight
            })
        })
        .then(res => res.json())
        .then(data => {
            self.setState({token: data.message});
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
                <h2>Enter weight</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Weight:
                            <input type="text" name="empWeight" onChange={this.handleFieldChange} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                      <span>
                      {this.state.feedback}
                      </span>
                    </div>
                </form>
            </main>
        )
    }
}

export default withRouter(Main);
