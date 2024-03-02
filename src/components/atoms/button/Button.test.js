import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Adjust the path as needed

describe('Button component', () => {
  test('renders button with provided text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick function when button is clicked', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click me';
    const { getByText } = render(<Button text={buttonText} onClick={handleClick} />);
    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
