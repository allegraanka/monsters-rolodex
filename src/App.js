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
    const { monsters, searchField } = this.state; // obj destructuring - const monsters = this.state.monsters
    
    // set new variable filteredMonsters to the return value of monsters.filter() which is a new 
    // array including only the monster names which include the value of the searchField input
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    // return a div containing the search-box component and the card-list component, which contains
    // as many cards as come in through the API via fetch
    // 
    return(
      <div className='App'>
        <SearchBox 
          placeholder='Search Monsters' // set placeholder and handleChange values on each instance
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList 
          monsters={filteredMonsters} 
        />
      </div>
    );
  }
}

export default App;
