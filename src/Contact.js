import React, {Component} from "react"; 
import "./Contact.css";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";
import {TiDocumentText} from "react-icons/ti";
import Fade from 'react-reveal/Fade';


class Contact extends Component {
    render(){
        return (
            <div className="Contact">
                <Fade bottom>
                    <h1 className="Contact-title">Contact Me</h1>
                    <div className="Contact-icons">
                        <a href="x"><FiMail /></a> <a target="_blank" href="https://www.linkedin.com/in/juan-pablo-luncumilla-945070136/"><FiLinkedin /></a> <a target="_blank" href="https://github.com/iamjpyo"><FiGithub /></a> <a target="_blank" href="https://drive.google.com/file/d/1IfEQTffFdkbY6es15T6HaO4ZXhCq-Gei/view"><TiDocumentText /></a>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;