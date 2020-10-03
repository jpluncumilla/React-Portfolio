import React, {Component} from "react"; 
import "./Cards.css";
import { MdWebAsset } from "react-icons/md";
import { FiGithub } from "react-icons/fi";


class Cards extends Component {
    render(){
        let imgSrc = `Project${this.props.id}`;
        return (
        <div className="Cards">
            <h1 className="Cards-title">{this.props.title}</h1>
            <img src={require(`./images/project${this.props.id}.png`)} alt="first" className="Cards-img"/>
            <p className="Card-technology">{this.props.technology}</p>
            <p>{this.props.description}</p>
            <div className="Cards-links">
                <a target="_blank" href={this.props.github}><FiGithub /></a> <a target="_blank" href={this.props.link}><MdWebAsset /></a>
            </div>
        </div>)
    }
}

export default Cards;