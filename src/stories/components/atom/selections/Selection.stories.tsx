import type { Meta, StoryObj } from '@storybook/react';
import SelectionWrapper from '../../../../components/atoms/selections/SelectionWrapper';

const meta = {
  component: SelectionWrapper,
} satisfies Meta<typeof SelectionWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxList = {
  args: {
    selections: [
      {
        children: 'Default',
        active: false,
        abled: true,
      },
      {
        children: 'Active',
        active: true,
        abled: true,
      },
      {
        children: 'Disable',
        active: true,
        abled: false,
      },
    ],
  },
} satisfies Story;
