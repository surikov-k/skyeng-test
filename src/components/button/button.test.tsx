import { render, screen } from '@testing-library/react';
import { Button } from './button';
import userEvent from '@testing-library/user-event/';

describe('Component: Button', () => {
  it('should render correctly', () => {
    render(
      <Button
        text="button"
        onClick={jest.fn}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('button')).toBeInTheDocument();
  });

  it('should call a callback when button is pressed', async () => {
    const onClick = jest.fn();
    render(
      <Button
        text="button"
        onClick={onClick}
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toBeCalled();

  });

});

