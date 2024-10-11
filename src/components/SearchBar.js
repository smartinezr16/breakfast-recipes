
import React, { useState } from 'react';
import useRecipes from '../hooks/useRecipes';
import { searchMealByName } from '../services/api';
import HomeButton from './HomeButton'; 
import './SearchBar.css'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useRecipes();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await searchMealByName(query);
      if (response.data.meals && response.data.meals.length > 0) {
        dispatch({ type: 'SET_RECIPES', payload: response.data.meals });
      } else {
        setError('No se encontró esa receta...');
        dispatch({ type: 'SET_RECIPES', payload: [] });
      }
    } catch (err) {
      setError('Hubo un error al buscar la receta.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar receta..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <HomeButton />
    </div>
  );
};

export default SearchBar;

