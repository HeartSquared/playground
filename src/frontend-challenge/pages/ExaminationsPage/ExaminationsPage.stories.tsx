import type { Meta, StoryObj } from '@storybook/react';
import { ExaminationsPage } from './ExaminationsPage';

const meta = {
  component: ExaminationsPage,
} satisfies Meta<typeof ExaminationsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
