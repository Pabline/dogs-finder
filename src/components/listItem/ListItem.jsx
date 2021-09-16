import React, { Component } from 'react'
import './ListItem.css';


export default class ListItem extends Component {
    render() {
        return (
            <span onClick={this.props.onClick}>{this.props.name}</span>
        )
    }
}
