import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage    from './Pages/LoginPage';

describe('LoginPage Component', () => {
  it('renders page title correctly', () => {
    const { getByText } = render(<LoginPage />);
    const titleElement = getByText(/Välkommen till login sidan!/i);
    expect(titleElement).toBeInTheDocument();
  });


  it('renders page title correctly', () => {
    const { getByText } = render(<LoginPage />);
    const pageTitleElement = getByText(/Välkommen till login sidan!/i);
    expect(pageTitleElement).toBeInTheDocument();
  });
 
  it('renders only one button with text "heje"', () => {
    const { getAllByText } = render(<LoginPage />);
    const buttonElements = getAllByText('heje');
    expect(buttonElements.length).toBe(2);
  });

});