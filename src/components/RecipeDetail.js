import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealById } from '../services/api';
import useRecipes from '../hooks/useRecipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useRecipes();

  useEffect(() => {
    fetchMealById(id).then(response => {
      dispatch({ type: 'SET_SELECTED_RECIPE', payload: response.data.meals[0] });
    });
  }, [id, dispatch]);

  const recipe = state.selectedRecipe;

  return recipe ? (
    <div className="recipe-detail">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default RecipeDetail;
