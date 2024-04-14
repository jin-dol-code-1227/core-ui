import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../../components/atoms/selections/Checkbox';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Default',
  },
} satisfies Story;

export const Active = {
  args: {
    children: 'Active',
  },
} satisfies Story;

export const Disable = {
  args: {
    children: 'Disable',
  },
} satisfies Story;
