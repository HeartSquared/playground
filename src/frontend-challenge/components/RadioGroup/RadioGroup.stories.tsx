import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioGroup } from './RadioGroup';

const meta = {
  component: RadioGroup,
  args: {
    legend: 'Group by',
    name: 'story__group-name',
    activeOption: 'date',
    onOptionChange: fn(),
    options: [
      { label: 'Date', value: 'date' },
      { label: 'Modality', value: 'modality' },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
