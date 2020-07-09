import React, {Component} from "react"; 
import "./Navbar.css";


class Navbar extends Component {
    render(){
        return (
            <div className="Navbar">
                <ul className="Navbar-menu">
                    <li><p className="Navbar-title">JP Luncumilla</p></li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#Work">Work</a> </li>
                    <li> <a href="#">Resume</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;