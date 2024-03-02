import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Properties from './Properties';

describe('Properties component', () => {
  test('calls setProperty and setEntireData functions on property selection', () => {
    const title = 'Test Title';
    const category = 'Test Category';
    const options = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];
    const setProperty = jest.fn();
    const setEntireData = jest.fn();
    const entireData = {};

    const { getByTestId } = render(
      <Properties
        title={title}
        category={category}
        options={options}
        setProperty={setProperty}
        setEntireData={setEntireData}
        entireData={entireData}
      />
    );

    const propertyDropdown = getByTestId('Test Category-dropdown');
    fireEvent.change(propertyDropdown, { target: { value: '1' } });

    expect(setProperty).toHaveBeenCalledWith('1');

    fireEvent.change(propertyDropdown, { target: { value: 'other' } });

    expect(setProperty).toHaveBeenCalledWith('other');
  });
});
