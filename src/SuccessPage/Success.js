import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, surname } = location.state;

  const handleBack = () => {
    navigate('/');
  }

  return (
    <div className='Success'>
      <h1>Formulaire soumis avec succès !</h1>
      <p>Votre nom : {name}</p>
      <p>Votre prénom : {surname}</p>
      <button onClick={handleBack}>Retour</button>
    </div>
  )
}

export default Success;