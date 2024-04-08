import { ButtonStyleType } from '../../../../type/components/atoms/buttons/Button';

export const ButtonStyleMapper = new Map<ButtonStyleType, string>([
  ['primary', 'bg-blue-500 hover:bg-blue-700 text-white border-0'],
  [
    'secondary',
    'bg-white hover:bg-gray-200 text-black border-1 border-gray-200',
  ],
]);
