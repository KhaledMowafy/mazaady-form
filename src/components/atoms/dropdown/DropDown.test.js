import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from './DropDown'; 

describe('DropDown component', () => {
  test('renders with provided title and category', () => {
    const data = {
      data: {
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
        ]
      }
    };
    const title = 'Test Title';
    const category = 'Test Category';
    const { getByLabelText, getByTestId } = render(
      <DropDown data={data} title={title} category={category} />
    );

    const titleLabel = getByLabelText(title);
    expect(titleLabel).toBeInTheDocument();

    const categoryDropdown = getByTestId('Test Category-dropdown');
    expect(categoryDropdown).toBeInTheDocument();
  });

  test('calls setCategory and setEntireData functions on category selection', () => {
    const data = {
      data: {
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
        ]
      }
    };
    const setCategory = jest.fn();
    const setEntireData = jest.fn();
    const title = 'Test Title';
    const category = 'Test Category';
    const { getByTestId } = render(
      <DropDown
        data={data}
        title={title}
        category={category}
        setCategory={setCategory}
        setEntireData={setEntireData}
      />
    );

    const categoryDropdown = getByTestId('Test Category-dropdown');
    fireEvent.change(categoryDropdown, { target: { value: '1' } });

    expect(setCategory).toHaveBeenCalledWith('1');
  });

  test('renders loading spinner when loading prop is true', () => {
    const data = {
      data: {
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
        ]
      }
    };
    const title = 'Test Title';
    const category = 'Test Category';
    const { getByTestId } = render(
      <DropDown data={data} title={title} category={category} loading={true} />
    );

    const loadingSpinner = getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
