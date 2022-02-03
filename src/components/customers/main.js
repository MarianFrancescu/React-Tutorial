import React, {Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            allCustomers: []
        }
    }

    render(){
        return(
            <main>
                <h2>Customers</h2>
                {
                    this.state.allCustomers.map( (customer, it) => (
                        <div key={it}>
                            {customer.empName}&nbsp;
                            {customer.empPass}
                        </div>
                    ))
                }
            </main>
        )
    }

    componentDidMount(){
        fetch("http://localhost:8080/getEmployees")
            .then(data => {
                return data.json();
            })
            .then(results => {
                this.setState(
                    {
                        allCustomers: results
                    }
                )
            });
    }
}

export default Main;