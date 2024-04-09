import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: ButtonVariants;
}

export type ActionButtonVariants = 'refresh' | 'arrow';

export interface ActionButtonProps extends ButtonProps {
  actionButtonVariant: ActionButtonVariants;
}
