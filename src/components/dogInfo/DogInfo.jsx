import React, { Component } from 'react'
import './DogInfo.css';


export default class DogInfo extends Component {
    render() {
        if(this.props.breed) {
            return (
                <div className="main">
                    <img src={this.props.breed.image.url} alt={this.props.breed.name} />
                    <h2>{this.props.breed.name}</h2>
                    <h3>Life span:</h3>
                    <span>{this.props.breed.life_span}</span>
                    <h3>Height:</h3>
                    <span>Imperial: {this.props.breed.height.imperial}</span>
                    <span>metric: {this.props.breed.height.metric}</span>
                    <h3>Weight:</h3>
                    <span>Imperial: {this.props.breed.weight.imperial}</span>
                    <span>metric: {this.props.breed.weight.metric}</span>
                </div>
            )
        }

        return (
            <h2>No breed selected yet...</h2>
        )

    }
}
