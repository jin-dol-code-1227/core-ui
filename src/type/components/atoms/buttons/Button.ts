import { ButtonHTMLAttributes } from 'react';

export type ButtonStyleType = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: ButtonStyleType;
}
