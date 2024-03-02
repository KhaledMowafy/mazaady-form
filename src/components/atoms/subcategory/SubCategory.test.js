import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SubCategory from './SubCategory';

describe('SubCategory component', () => {
  test('calls setSub and setEntireData functions on subcategory selection', () => {
    const category = 'Test Category';
    const title = 'Test Title';
    const childs = [
      { id: 1, name: 'Subcategory 1' },
      { id: 2, name: 'Subcategory 2' },
    ];
    const setSub = jest.fn();
    const setEntireData = jest.fn();
    const entireData = {};

    const { getByTestId } = render(
      <SubCategory
        title={title}
        category={category}
        childs={childs}
        setSub={setSub}
        setEntireData={setEntireData}
        entireData={entireData}
      />
    );

    const subcategoryDropdown = getByTestId(`${category}-dropdown`);
    fireEvent.change(subcategoryDropdown, { target: { value: '1' } });

    expect(setSub).toHaveBeenCalledWith('1');
  });
});
