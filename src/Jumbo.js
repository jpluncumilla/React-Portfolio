import React, {Component} from "react"; 
import "./Jumbo.css";
import Particles from 'react-particles-js';
import {IoIosArrowDropdownCircle} from "react-icons/io"
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';




class Jumbo extends Component {
    render(){
        return (
            
            <div className="Jumbo">
                <Particles
                className="Particles-background"
                params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 2
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
                <Fade left>
                 <h1 className="Jumbo-title">JP Luncumilla</h1>
                </Fade>
                <Fade right>
                 <h2 className="Jumbo-subtitle">front end developer</h2>
                </Fade>
                <Fade bottom>
                    <NavLink smooth to="/About#About" activeClassName="selected">
                       <IoIosArrowDropdownCircle className="Jumbo-icon"/>
                    </NavLink>
                </Fade>

            </div>
        )
    }
}

export default Jumbo;