import type { Meta, StoryObj } from '@storybook/react';
import { ExaminationImage } from './ExaminationImage';

const meta = {
  component: ExaminationImage,
  args: {
    date: '2019-04-01',
    eye: 'L',
    modality: 'OCT',
    note: 'This is a note',
    thumbnail: '/images/20190401_oct_left.jpg',
  },
} satisfies Meta<typeof ExaminationImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
