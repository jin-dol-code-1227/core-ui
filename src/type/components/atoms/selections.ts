import { InputHTMLAttributes } from 'react';
import { Toggleable } from './global';

export type SelectionVariable = 'checkbox' | 'radio' | 'toggle';

export interface SelectionProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Toggleable {
  abled?: boolean;
  selectionVariable?: SelectionVariable;
}

export interface SelectionWrapperProps {
  selections: Omit<SelectionProps, 'selectionVariable'>[];
  name?: string;
  setValues?: React.Dispatch<React.SetStateAction<boolean[]>>;
  selectionVariable?: SelectionVariable;
}
