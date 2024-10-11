
import React, { createContext, useReducer } from 'react';

const RecipesContext = createContext();

const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.payload };
    case 'SET_SELECTED_RECIPE':
      return { ...state, selectedRecipe: action.payload };
    default:
      return state;
  }
};

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, { recipes: [], selectedRecipe: null });

  return (
    <RecipesContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
