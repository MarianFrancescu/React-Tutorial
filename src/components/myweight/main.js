import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// const jwt = require('jsonwebtoken');
import jwt_decode from "jwt-decode";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            empName: "",
            employee: {}
        }
    }

    componentDidMount(){
      const self = this;
      const rawToken = localStorage.getItem('token');
      const decToken = jwt_decode(rawToken, 'secret');
          if(decToken){
            self.setState({empName: decToken.empName});
          }
      fetch(`http://localhost:8080/getEmployee/${decToken.empName}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },

      })
      .then(res => res.json())
      .then(data => {
        self.setState(
            {
                employee: data
            }
        );
        console.log(self.state.employee);
      })
      .catch(err => console.log("Error get "));
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



    render(){
      if(this.state.employee[0]?.empWeights?.length > 0){
        return(
            <main>
                {
                  this.state.employee[0]?.empWeights.map((weights, i) => (
                      <div key={i}>
                          Date: {weights?.date}
                          {' '}
                          Weight: {weights?.weight}
                      </div>
                  ))

                    // this.state.employee[0]?.empWeights.map((emp, i) => (
                    //     <div key={i}>
                    //         {emp?.empName}
                    //         {emp?.empWeights.map((weights ,j) =>
                    //             {
                    //                 return <div key={j}>
                    //                     Date: { new Date(weights?.date).toLocaleDateString()}
                    //                     {' '}
                    //                     Weight: {weights?.weight}
                    //                     </div>
                    //             }
                    //         )}
                    //     </div>
                    // ))
                }
            </main>
        )
    } else {
      return (
        <main>
          <h2>MyWeights</h2>
          <div>Not authorized</div>
        </main>
      )
    }
  }
}

export default withRouter(Main);
