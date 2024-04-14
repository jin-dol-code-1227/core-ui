import { InputHTMLAttributes } from 'react';
import { Toggleable } from './global';

export type SelectionVariants = 'abled' | 'disabled';

export interface SelectionProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Toggleable {
  selectionVariant?: SelectionVariants;
}
