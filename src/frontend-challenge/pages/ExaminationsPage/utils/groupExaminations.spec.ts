import { describe, expect, test } from 'vitest';
import { groupExaminations } from './groupExaminations';

const mockExaminations = [
  {
    date: '2019-04-01',
    images: [
      {
        eye: 'L',
        modality: 'OCT',
        note: 'Left eye thickness is 2um which is normal',
        thumbnail: '/images/20190401_oct_left.jpg',
      },
      {
        eye: 'L',
        modality: 'OP',
        note: 'Right eye looks normal',
        thumbnail: '/images/20190401_op_left.jpg',
      },
    ],
  },
  {
    date: '2019-04-13',
    images: [
      {
        eye: 'L',
        modality: 'OCT',
        note: 'Left eye looks normal',
        thumbnail: '/images/20190413_oct_left.jpg',
      },
    ],
  },
];

describe('groupExaminations()', () => {
  test('groups images by date', () => {
    const result = groupExaminations(mockExaminations, 'date');
    expect(result).toStrictEqual({
      '2019-04-01': [
        {
          date: '2019-04-01',
          eye: 'L',
          modality: 'OCT',
          note: 'Left eye thickness is 2um which is normal',
          thumbnail: '/images/20190401_oct_left.jpg',
        },
        {
          date: '2019-04-01',
          eye: 'L',
          modality: 'OP',
          note: 'Right eye looks normal',
          thumbnail: '/images/20190401_op_left.jpg',
        },
      ],
      '2019-04-13': [
        {
          date: '2019-04-13',
          eye: 'L',
          modality: 'OCT',
          note: 'Left eye looks normal',
          thumbnail: '/images/20190413_oct_left.jpg',
        },
      ],
    });
  });

  test('groups images by modality', () => {
    const result = groupExaminations(mockExaminations, 'modality');
    expect(result).toStrictEqual({
      OCT: [
        {
          date: '2019-04-01',
          eye: 'L',
          modality: 'OCT',
          note: 'Left eye thickness is 2um which is normal',
          thumbnail: '/images/20190401_oct_left.jpg',
        },
        {
          date: '2019-04-13',
          eye: 'L',
          modality: 'OCT',
          note: 'Left eye looks normal',
          thumbnail: '/images/20190413_oct_left.jpg',
        },
      ],
      OP: [
        {
          date: '2019-04-01',
          eye: 'L',
          modality: 'OP',
          note: 'Right eye looks normal',
          thumbnail: '/images/20190401_op_left.jpg',
        },
      ],
    });
  });
});
