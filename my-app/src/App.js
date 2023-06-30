import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';


const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (pokemonName) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          console.log(response.data);
          setPokemonData(response.data);
        } catch (error) {
          console.log(error);
          setPokemonData(null);
        }
      } else {
        setPokemonData(null);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchPokemonData();
    }, 500); 

    return () => clearTimeout(debounceTimeout);
  }, [pokemonName]);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <div className="container">
      <h1>Pokemon Stats</h1>
      <div className="input-container">
        <input
          type="text"
          value={pokemonName}
          onChange={handleInputChange}
          placeholder="Enter Pokemon Name"
        />
      </div>
      {pokemonData ? (
        <Card
          name={pokemonData.name}
          height={pokemonData.height}
          weight={pokemonData.weight}
        />
      ) : (
        <p className="no-data">No Pokemon data available</p>
      )}
    </div>
  );
};

export default App;
