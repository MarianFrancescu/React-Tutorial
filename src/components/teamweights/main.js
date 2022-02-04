import React, {Component} from "react";

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            allWeights: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/getEmployees")
            .then(response => response.json())
            .then(response => {
                this.setState(
                    {
                        allWeights: response
                    }
                )
            });
    }

    render(){
      if(this.state.allWeights > 0){
        return(
            <main>
                {
                    this.state.allWeights.map((emp, i) => (
                        <div key={i}>
                            {emp.empName}
                            {emp.empWeights.map((weights ,j) =>
                                {
                                    return <div key={j}>
                                        Date: { new Date(weights?.date).toLocaleDateString()}
                                        {' '}
                                        Weight: {weights?.weight}
                                        </div>
                                }
                            )}
                        </div>
                    ))
                }
            </main>
        )
    } else {
      return (
        <main>
          <h2>TeamWeights</h2>
          <div>Not authorized</div>
        </main>
      )
    }
  }

}

export default Main;
