import React, {Component} from "react"; 
import "./Jumbo.css";
import Particles from 'react-particles-js';
import {IoIosArrowDropdownCircle} from "react-icons/io"
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";




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
                    <IoIosArrowDropdownCircle className="Jumbo-icon"/>
                </Fade>

            </div>
        )
    }
}

export default Jumbo;