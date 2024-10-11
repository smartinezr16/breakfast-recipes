
import React from 'react';
import SearchBar from '../components/SearchBar';
import './Header.css'; 

const Header = () => (
  <header className="header">
    <h1>Delicious Breakfast Recipes</h1> 
    <SearchBar />
  </header>
);

export default Header;
