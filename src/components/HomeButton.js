import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './HomeButton.css';

const HomeButton = () => (
  <Link to="/" className="home-button">
    <FaHome size={30} />
  </Link>
);

export default HomeButton;

