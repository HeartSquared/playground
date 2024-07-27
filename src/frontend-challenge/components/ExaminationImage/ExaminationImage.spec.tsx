import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExaminationImage } from './ExaminationImage';

const mockProps = {
  date: '2019-04-01',
  eye: 'L',
  modality: 'OCT',
  note: 'This is a note',
  thumbnail: '/images/20190401_oct_left.jpg',
} as const;

describe('<ExaminationImage />', () => {
  test('shows full text string for left eye', () => {
    render(<ExaminationImage {...mockProps} />);
    expect(screen.getByText('Left eye')).toBeInTheDocument();
  });

  test('shows full text string for right eye', () => {
    render(<ExaminationImage {...mockProps} eye="R" />);
    expect(screen.getByText('Right eye')).toBeInTheDocument();
  });

  test('adds alt to image', () => {
    render(<ExaminationImage {...mockProps} />);
    expect(
      screen.getByRole('img', { name: 'Left eye OCT' }),
    ).toBeInTheDocument();
  });
});
