import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button {...props} className={`button ${props.className}`.trim()} />;
};
