import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './../App';

test('Fonctionnement du formulaire', async() => {
  render(<App />);

  const nameInput = screen.getAllByLabelText(/Nom/i)[0];
  const surnameInput = screen.getAllByLabelText(/Prenom/i)[0];
  const submitButton = screen.getAllByText(/Valider/i)[0];

  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(surnameInput, { target: { value: 'Doe' } });
  fireEvent.click(submitButton);

  await waitFor(() => screen.findAllByText(/Formulaire soumis avec succès !/i));

  const resultName = screen.getAllByText(/Votre nom : John/i)[0];
  const resultSurname = screen.getAllByText(/Votre prénom : Doe/i)[0];

  expect(resultName).toBeInTheDocument();
  expect(resultSurname).toBeInTheDocument();
});