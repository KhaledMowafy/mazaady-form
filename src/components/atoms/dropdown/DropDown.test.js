import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';

describe('DropDown Component', () => {
  test('renders with title and category', () => {
    render(<DropDown title="Test Title" category="Test Category" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Title')).toBeInTheDocument();
  });

  test('renders select options', () => {
    render(<DropDown />);
    expect(screen.getAllByRole('option')).toHaveLength(4); // 3 options + 1 default
  });
});
