import { render, screen } from '@testing-library/react';
import RootCmp from './root-cmp.jsx';

test('renders learn react link', () => {
  render(<RootCmp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
