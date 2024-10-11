import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealById } from '../services/api';
import './RecipeDetailPage.css';
import HomeButton from '../components/HomeButton';


const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchMealById(id).then(response => {
      setRecipe(response.data.meals[0]);
    });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-page">
      
      <HomeButton />
      
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-info">
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetailPage;

