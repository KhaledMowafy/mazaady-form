import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from './DropDown';

describe('DropDown component', () => {
  const mockData = {
    data: {
      categories: [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
      ]
    }
  };

  test('renders component with given title, category, and data', () => {
    const title = 'Test Title';
    const category = 'Test Category';
    const setCategoryMock = jest.fn();

    render(
      <DropDown
        data={mockData}
        title={title}
        category={category}
        loading={false}
        error={false}
        setCategory={setCategoryMock}
      />
    );

    // Assert that title and category are rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();

    // Assert that dropdown options are rendered correctly
    const dropdown = screen.getByTestId(`${category}-dropdown`);
    expect(dropdown).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(mockData.data.categories.length); // +1 for hidden option
  });

  test('selecting an option triggers onChange event', () => {
    const title = 'Test Title';
    const category = 'Test Category';
    const setCategoryMock = jest.fn();
  
    render(
      <DropDown
        data={mockData}
        title={title}
        category={category}
        loading={false}
        error={false}
        setCategory={setCategoryMock}
      />
    );
  
    const dropdown = screen.getByTestId(`${category}-dropdown`);
  
     // Attach a log for onChange event
    dropdown.addEventListener('change', (event) => console.log(event.target.value));

    // Simulate selecting an option
    fireEvent.change(dropdown, { target: { value: `${mockData.data.categories[0].id}` } });

    // Simulate selecting an option
    userEvent.selectOptions(dropdown, `${mockData.data.categories[0].id}`);

    // Assert that onChange event is triggered with correct value
    expect(setCategoryMock).toHaveBeenCalledTimes(1);
    expect(setCategoryMock).toHaveBeenCalledWith(`${mockData.data.categories[0].id}`);
  });

  test('displays loading spinner when loading prop is true', () => {
    const title = 'Test Title';
    const category = 'Test Category';

    render(
      <DropDown
        data={mockData}
        title={title}
        category={category}
        loading={true}
        error={false}
        setCategory={() => {}}
      />
    );

    // Assert that loading spinner is displayed
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
