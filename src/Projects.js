import React, { Component } from 'react';
import "./Projects.css";
import Cards from "./Cards";
import Fade from 'react-reveal/Fade';

class Projects extends Component {
    static defaultProps = {
        projects : [
            {id: 1, title: 'Pokedex', technology: "React.js & CSS", description: "Pokedex is a simple project created with the purpose of enforcing styling practices as well as import and exporting components."},
            {id: 2, title: 'Dice Game', technology: "Javascript & CSS", description: "Dice Game was made using JavaScript as a practice of logic as well as DOM manipulation."},
            {id: 3, title: 'Crystals Game', technology: "jQuery, Javascript & CSS", description: "Crystals Game was created with the purpose of enforcing logic as well as a practice of jQuery DOM manipulation."},
            {id: 4, title: 'Friend Finder', technology: "React.js, Node.js & Express", description: "Friend Finder is a collaborative project made as a disaster relief effort for IBM's Call for Code. It was made with React.js, Node.js, Express.js, and deployment in Heroku."}
        ]
    }

    render() {
        return (
            <div className="Projects">
                <Fade bottom>
                  <h1 className="Projects-title">Work</h1>
                  <div className="Projects-cards">
                {this.props.projects.map(p =>
                    <Cards id={p.id} title={p.title} technology={p.technology} description={p.description}/>)}
                </div>
                </Fade>
                </div>
        )
    }
}

export default Projects;