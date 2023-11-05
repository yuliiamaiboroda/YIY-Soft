import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  type = 'button',
  children,
  ...props
}: IProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
