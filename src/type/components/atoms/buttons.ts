import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant: ButtonVariants;
}
