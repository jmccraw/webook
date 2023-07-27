import Card from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const Props = {
  name: 'Test Room',
  spots: 50,
  thumbnail: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
};

describe('<Card />', () => {
  it('should render', () => {
    render(<Card {...Props} />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(button).not.toBeDisabled();
  });

  it('should render disabled with 0 spots', () => {
    render(<Card {...Props} spots={0} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should disable the button on click', () => {
    render(<Card {...Props} />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
