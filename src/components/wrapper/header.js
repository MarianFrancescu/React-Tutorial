import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            validUser: localStorage.getItem('validUser')
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
                            !this.state.validUser ?
                                <li><Link to='/register'>Register</Link></li>
                                : null
                        }
                        
                        <li><Link to='/customers'>Customers</Link></li>
                        {
                            !this.state.validUser ?
                                <li><Link to='/login'>Login</Link></li>
                                : <li><Link to='/logout'>Logout {this.state.validUser}</Link></li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }   
}

export default Header;