import {  MouseEventHandler } from "react";

export interface ButtonProps {
    className?: string;
    children: string;
    disabled?: boolean,
    text?: string,
    primary?: boolean
    size?: "small" | "medium" | "large",
    type?: 'button' | 'reset' | 'submit';
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }
