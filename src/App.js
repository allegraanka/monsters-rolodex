import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

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
    return(
      <div className='App'>
        <input 
          type='search' 
          placeholder='Search Monsters' 
          onChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
