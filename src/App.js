import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users') // make a request for the data at this url
    .then(response => response.json()) // convert the response into json, so we can use it within our JS
    .then(users => this.setState( {monsters: users} )); // set our monsters array to the user data we just fetched
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className='App'>
        <SearchBox 
          placeholder='Search Monsters' 
          handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
