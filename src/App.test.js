import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage    from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';

describe('LoginPage Component', () => {
  it('renders page title correctly', () => {
    const { getByText } = render(<LoginPage />);
    const titleElement = getByText(/Välkommen till login sidan!/i);
    expect(titleElement).toBeInTheDocument();
  });


  it('renders only one button with text "Logga In"', () => {
    const { getAllByText } = render(<LoginPage />);
    const buttonElements = getAllByText('Logga In');
    expect(buttonElements.length).toBe(1);
  });

});



