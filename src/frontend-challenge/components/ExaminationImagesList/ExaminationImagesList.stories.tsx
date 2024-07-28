import type { Meta, StoryObj } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
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
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        defaultContainer: {
          name: 'Default container',
          styles: {
            width: '500px',
            height: '600px',
          },
        },
        smallContainer: {
          name: 'Small container (< 500px)',
          styles: {
            width: '499px',
            height: '600px',
          },
        },
      },
    },
  },
} satisfies Meta<typeof ExaminationImagesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const DefaultContainer: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'defaultContainer',
    },
  },
};

export const SmallContainer: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'smallContainer',
    },
  },
};
