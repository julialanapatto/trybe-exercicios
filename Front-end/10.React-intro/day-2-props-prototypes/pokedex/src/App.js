import react from 'react';
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App"> 
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
      </div>
    );
  }
}
 export default App;
