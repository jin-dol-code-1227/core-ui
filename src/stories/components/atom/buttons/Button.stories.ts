import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../../../components/atoms/buttons/Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    buttonVariant: 'primary',
    children: 'Primary',
  },
} satisfies Story;

export const Secondary = {
  args: {
    buttonVariant: 'secondary',
    children: 'Secondary',
  },
} satisfies Story;
