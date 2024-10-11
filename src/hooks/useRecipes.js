
import { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

const useRecipes = () => {
  const { state, dispatch } = useContext(RecipesContext);
  return { state, dispatch };
};

export default useRecipes;