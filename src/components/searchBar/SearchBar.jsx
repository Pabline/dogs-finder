import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <form>
                <span>Filter by Breed</span>
                <input type="text" 
                placeholder="Example Greyhound..." 
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}></input>
            </form>
        )
    }
}
