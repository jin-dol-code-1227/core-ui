import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../../../../components/atoms/buttons/IconButton';

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heart = {
  args: {
    iconButtonVariant: 'heart',
    children: 'Hello',
  },
} satisfies Story;

export const Bookmark = {
  args: {
    iconButtonVariant: 'bookmark',
    children: 'Hello',
  },
} satisfies Story;

export const Star = {
  args: {
    iconButtonVariant: 'star',
    children: 'Hello',
  },
} satisfies Story;
