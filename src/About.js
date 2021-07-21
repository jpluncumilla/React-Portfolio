import React, { Component } from "react";
import "./About.css";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiJqueryLogo, DiNodejs, DiNpm, DiMongodb, DiFirebase } from "react-icons/di"
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoIosArrowDropdownCircle } from "react-icons/io";




class About extends Component {
    render() {
        return (
            <div className="About" id="About">
                <Fade bottom>
                    <h1 className="About-title">About Me</h1>
                </Fade>
                <Fade bottom>
                    <p className="About-paragraph">Thanks for visiting! My name is Juan Pablo Luncumilla, a certified web developer with two years of experience and graduate of the Full Stack Development <br></br>Program
                        of The University of Miami. Although my development focus is mostly in the frontend I do not limit myself to the backend.
                        <br></br>While my frontend skills consist of the following:</p>
                    <p className="About-icons"> <DiHtml5 /> <DiReact /> <DiJsBadge /> <DiCss3 /> <DiJqueryLogo /> </p>
                    <p className="About-paragraph">I also have knowledge of backend and database technologies such as:</p>
                    <p className="About-icons"> <DiNodejs /> <DiNpm /> <DiMongodb /> <DiFirebase /> </p>
                    <p className="About-paragraph">Outside of programming I have a previous career in hospitality including a managerial role working for a shared workspace.</p>
                </Fade>
                <Fade bottom>
                    <NavLink smooth to="/Projects#Projects" activeClassName="selected">
                        <IoIosArrowDropdownCircle className="About-icon" />
                    </NavLink>
                </Fade>
            </div>
        )
    }
};

export default About;
