import type { Meta, StoryObj } from '@storybook/react';
import TextButton from '../../../../components/atoms/buttons/TextButton';

const meta = {
  component: TextButton,
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Right = {
  args: {
    textButtonVariant: 'right',
    children: 'Hello',
  },
} satisfies Story;

export const Down = {
  args: {
    textButtonVariant: 'down',
    children: 'Hello',
  },
} satisfies Story;
