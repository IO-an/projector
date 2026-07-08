import type { HTMLAttributes } from 'react';

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  children: string;
}
