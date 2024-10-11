import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import { RecipesProvider } from './context/RecipesContext';

const App = () => (
  <Router>
    <RecipesProvider>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </RecipesProvider>
  </Router>
);

export default App;
