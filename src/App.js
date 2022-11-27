import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

function App() {
  return (
    <>
      <h1>Exercise - Pokedex</h1>
      <Pokedex pokemonList={ pokemonList } />
    </>
  );
}

export default App;
