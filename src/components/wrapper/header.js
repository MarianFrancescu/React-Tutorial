import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem('token')
        }
    }

    render(){
        return(
            <header>
                <h1><Link to='/'>Skillsoft weights</Link></h1>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        {
                            !this.state.token ?
                                <li><Link to='/register'>Register</Link></li>
                                : null
                        }
                        <li><Link to='/enterweight'>Enter weight</Link></li>
                        <li><Link to='/myweight'>My weight</Link></li>
                        <li><Link to='/customers'>Customers</Link></li>
                        <li><Link to='/teamweights'>TeamWeights</Link></li>

                        {
                            !this.state.token ?
                                <li><Link to='/login'>Login</Link></li>
                                : <li><Link to='/logout'>Logout {this.state.empName}</Link></li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
