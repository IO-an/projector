import type { ReactElement } from 'react';
import type { ButtonProps } from './button.types';

export function Button({ children, ...props }: ButtonProps): ReactElement {
  return <button {...props}>{children}</button>;
}
