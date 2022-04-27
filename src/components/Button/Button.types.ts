import {  MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  children: any;
  disabled?: boolean,
  primary?: boolean
  size?: "small" | "medium" | "large",
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
