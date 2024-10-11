import React from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import HomeButton from '../components/HomeButton';

const HomePage = () => (
  <div className="home-page">
    <HomeButton />
    <h1>Deliciosas recetas para el desayuno</h1>
    <SearchBar />
    <RecipeList />
  </div>
);

export default HomePage;
