import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders See /rooms text', () => {
    render(<App />);
    const divElement = screen.getByText(/See \/rooms/i);
    expect(divElement).toBeInTheDocument();
  });
});
