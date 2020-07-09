import React, {Component} from "react"; 
import "./Cards.css";


class Cards extends Component {
    render(){
        let imgSrc = `Project${this.props.id}`;
        return (
        <div className="Cards">
            <h1 className="Cards-title">{this.props.title}</h1>
            <img src={require(`./images/project${this.props.id}.png`)} alt="first" className="Cards-img"/>
            <p>{this.props.technology}</p>
            <p>{this.props.description}</p>
        </div>)
    }
}

export default Cards;