import React from 'react';
import "./Header.css";

import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
        <img id='image-movie' src="https://m.media-amazon.com/images/M/MV5BN2U2YzU1ZjYtZjAyZS00MjhhLTliMzctMmRjMjI2MjdjNzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
        <h1>Rick And Morty</h1>
        <p>- Movie App -</p>
        <NavBar />
    </header>
  )
}

export default Header