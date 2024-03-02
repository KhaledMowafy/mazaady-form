import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  test('calls onChange function with input value and title', () => {
    // Mock data and function
    const title = 'Test Title';
    const category = 'Test Category';
    const onChange = jest.fn();

    // Render the component
    const { getByLabelText } = render(
      <Input
        title={title}
        category={category}
        onChange={onChange}
      />
    );

    // Simulate typing in the input field
    const inputElement = getByLabelText(title);
    const inputValue = 'Test Input Value';
    fireEvent.change(inputElement, { target: { value: inputValue } });

    // Check if onChange function is called with correct arguments
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), title);
  });
});
