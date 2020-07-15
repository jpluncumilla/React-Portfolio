import React, {Component} from "react"; 
import "./About.css";
import {DiReact, DiJsBadge, DiHtml5, DiCss3, DiJqueryLogo, DiNodejs, DiNpm, DiMongodb, DiFirebase} from "react-icons/di"
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {IoIosArrowDropdownCircle} from "react-icons/io";




class About extends Component {
    render(){
        return (
            <div className="About" id="About">
                <Fade bottom>
                  <h1 className="About-title">About Me</h1>
                </Fade>
                <Fade bottom>
                <p className="About-paragraph">Hello! I am JP Luncumilla, a certified web developer graduate at the Full Stack Development Program at The University of Miami. My front end skills consist of:</p>
                <p className="About-icons"> <DiHtml5 /> <DiReact /> <DiJsBadge /> <DiCss3 /> <DiJqueryLogo /> </p>
                <p className="About-paragraph">My back end and database skills consist of:</p>
                <p className="About-icons"> <DiNodejs /> <DiNpm /> <DiMongodb /> <DiFirebase /> </p>
                <p className="About-paragraph">Outside of my programming skills I have prior experience in hospitality that includes managerial experience working in a shared workspace in a start up enviroment as well as luxury hotels.</p>
                </Fade>
                <Fade bottom>
                    <NavLink smooth to="/Projects#Projects" activeClassName="selected">
                       <IoIosArrowDropdownCircle className="About-icon"/>
                    </NavLink>
                </Fade>
            </div>
        )
    }
};

export default About;
