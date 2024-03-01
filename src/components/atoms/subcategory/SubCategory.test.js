import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubCategory from './SubCategory';

describe('SubCategory component', () => {
  const mockData = [
    { id: 1, name: 'SubCategory 1' },
    { id: 2, name: 'SubCategory 2' },
    { id: 3, name: 'SubCategory 3' },
  ];

  test('renders component with given title, category, and data', () => {
    const title = 'Test Title';
    const category = 'Test Category';
    
    render(<SubCategory title={title} category={category} data={mockData} />);
    
    // Assert that title and category are rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    
    // Assert that dropdown options are rendered correctly
    const dropdown = screen.getByTestId(`${category}-dropdown`);
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveAttribute('id', category);
    expect(screen.getAllByRole('option')).toHaveLength(mockData.length ); 
  });

  test('selecting an option triggers onChange event', () => {
    const title = 'Test Title';
    const category = 'Test Category';
    const onChangeMock = jest.fn();
    
    render(<SubCategory title={title} category={category} data={mockData} onChange={onChangeMock} />);
    
    const dropdown = screen.getByTestId(`${category}-dropdown`);
    
    // Simulate selecting an option
    userEvent.selectOptions(dropdown, mockData[0].id.toString());
    
  });
});
