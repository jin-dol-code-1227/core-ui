import type { Meta, StoryObj } from '@storybook/react';
import ActionButton from '../../../../components/atoms/buttons/ActionButton';

const meta = {
  component: ActionButton,
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Refresh = {
  args: {
    buttonVariant: 'secondary',
    actionButtonVariant: 'refresh',
    children: 'Refresh',
  },
} satisfies Story;

export const Arrow = {
  args: {
    buttonVariant: 'secondary',
    actionButtonVariant: 'arrow',
    children: 'Arrow',
  },
} satisfies Story;
