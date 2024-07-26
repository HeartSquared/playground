import { describe, expect, test } from 'vitest';
import { App } from './App';
import { render, screen } from '@testing-library/react';

describe('<App>', () => {
  test('renders button element', () => {
    render(<App />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
