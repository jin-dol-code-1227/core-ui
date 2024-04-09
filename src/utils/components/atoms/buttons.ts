import { ButtonVariants } from '../../../type/components/atoms/buttons';

export const ButtonStyleMapper = new Map<ButtonVariants, string>([
  ['primary', 'bg-blue-500 hover:bg-blue-700 text-white border-0'],
  ['secondary', 'bg-white hover:bg-gray-200 text-black border border-gray-200'],
]);
