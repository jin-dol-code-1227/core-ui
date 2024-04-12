import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: ButtonVariants;
}

export type TextButtonVariants = 'right' | 'down';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButtonVariant?: TextButtonVariants;
  open?: boolean;
  onClickOpen?: () => void;
  onClickClose?: () => void;
}

export type ActionButtonVariants = 'refresh' | 'arrow';

export interface ActionButtonProps extends ButtonProps {
  actionButtonVariant: ActionButtonVariants;
  active?: boolean;
}

export type IconButtonVariants = 'heart' | 'bookmark' | 'star';
export interface IconButtonProps extends ButtonProps {
  iconButtonVariant: IconButtonVariants;
  active?: boolean;
}
