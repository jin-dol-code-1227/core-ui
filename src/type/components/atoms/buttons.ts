import { ButtonHTMLAttributes } from 'react';
import { Toggleable } from './global';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: ButtonVariants;
}

export type TextButtonVariants = 'right' | 'down';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Toggleable {
  textButtonVariant?: TextButtonVariants;
}

export type ActionButtonVariants = 'refresh' | 'arrow';

export interface ActionButtonProps extends ButtonProps, Toggleable {
  actionButtonVariant: ActionButtonVariants;
}

export type IconButtonVariants = 'heart' | 'bookmark' | 'star';
export interface IconButtonProps extends ButtonProps, Toggleable {
  iconButtonVariant: IconButtonVariants;
}
