import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { fetchMealByFirstLetter } from '../services/api';
import useRecipes from '../hooks/useRecipes';
import './RecipeList.css';

const RecipeList = () => {
  const { state, dispatch } = useRecipes();

  useEffect(() => {
    fetchMealByFirstLetter('b').then(response => {
      dispatch({ type: 'SET_RECIPES', payload: response.data.meals });
    });
  }, [dispatch]);

  return (
    <div className="recipe-list">
      {state.recipes.map(recipe => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

