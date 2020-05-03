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

  // context of 'this' in class components will automatically be applied when using arrow functions
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render () {
    // obj destructuring - const monsters = this.state.monsters
    const { monsters, searchField } = this.state;
    
    // set new variable filteredMonsters to the return value of monsters.filter() which is a new 
    // array including only the monster names which include the value of the searchField input
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    // return a div containing the search-box component and the card-list component, which contains
    // as many cards as come in through the API via fetch
    return(
      <div className='App'>
        <h1 className='App-title'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters' // set placeholder and handleChange values on each instance
          handleChange={this.handleChange}
        />
        <CardList 
          monsters={filteredMonsters} 
        />
      </div>
    );
  }
}

export default App;

// the 'this' keyword references the context in which it is being invoked, or called (the caller's context)
// 'this' gets bound differently depending on how we write the class method its in, and where we try to use it
// this has to do with the way that functions behave in JavaScript
// this is why we use this.handleChange = this.handleChange.bind(this); binding it to the correct scope
// ES6 arrow functions allow them to set the context of 'this' in whatever it was that declared it in the first place (in the first place being, when it was defined) which is called lexical scoping
