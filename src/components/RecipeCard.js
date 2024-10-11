
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css'; 

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <Link to={`/recipe/${recipe.idMeal}`}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      
    </Link>
  </div>
);

export default RecipeCard;
