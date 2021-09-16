import React from 'react';
import './App.css';
import'./components/searchBar/SearchBar';
import SearchBar from './components/searchBar/SearchBar';
import ListItem from './components/listItem/ListItem';
import DogInfo from './components/dogInfo/DogInfo';
import { keydogs } from './api-keys';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected: null,
      filterText: ''
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    const url = "https://api.thedogapi.com/v1/breeds";

    fetch(url, {
      method: "GET",
      headers: {
        'x-api-key': keydogs
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            selected: result[0]
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleClick(breed) {
    this.setState({
      selected: breed
    })
  }

  render() {
    let listItems = this.state.items ? this.state.items.map((breed) => { 
      if(breed.name.indexOf(this.state.filterText) != -1 ){
        return <ListItem key={breed.id} name={breed.name} onClick={() => this.handleClick(breed)}/>
      }
        return null;
      }
    ) : null;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Dog Finder
          </p>
        </header>
        <main className="App-main">
          <aside className="App-list">
            <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>
            <div id="breed-list">
              {listItems}
            </div>
          </aside>
          <article className="App-content">
            <DogInfo breed={this.state.selected} />
          </article>
        </main>
      </div>
    );
  }
}

export default App;
