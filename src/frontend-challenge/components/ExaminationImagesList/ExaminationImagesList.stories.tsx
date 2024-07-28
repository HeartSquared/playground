import type { Meta, StoryObj } from '@storybook/react';
import { ExaminationImagesList } from './ExaminationImagesList';
import { ImageMeta } from '../../pages/ExaminationsPage/types';

const imageMeta = {
  date: '2019-04-01',
  eye: 'L',
  modality: 'OCT',
  note: 'This is a note',
  thumbnail: '/images/20190401_oct_left.jpg',
} satisfies ImageMeta;

const meta = {
  component: ExaminationImagesList,
  args: {
    images: [imageMeta, imageMeta, imageMeta],
  },
} satisfies Meta<typeof ExaminationImagesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
