import React, {Component} from "react"; 
import "./Contact.css";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";
import {TiDocumentText} from "react-icons/ti";
import Fade from 'react-reveal/Fade';


class Contact extends Component {
    render(){
        return (
            <div className="Contact" id="Contact">
                <Fade bottom>
                    <h1 className="Contact-title">Contact Me</h1>
                    <div className="Contact-icons">
                        <a target="_blank" href="mailto:jpluncumilla@gmail.com"><FiMail /></a> 
                        <a target="_blank" href="https://linkedin.com/in/jpluncumilla"><FiLinkedin /></a> 
                        <a target="_blank" href="https://github.com/iamjpyo"><FiGithub /></a> 
                        <a target="_blank" href="https://drive.google.com/file/d/1uOSQelr7k5Arqcr_zzZ9AlkCqhq7CL_M/view?usp=sharing"><TiDocumentText /></a>
                    </div>
                    <div className="Footer">
                        <p>Powered by: JP Luncumilla</p>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;