import React, { FC } from 'react';
import styled from 'styled-components';

// import { ButtonProps } from './Button.types';

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

const StyledButton = styled.button<ButtonProps>`
  padding: 10px;
  border-radius: 4px;
  background-color: red;
  color: white;
`;

const Button: FC<ButtonProps> = ({ 
  disabled,
  size,
  primary,
  text,
  type = 'button',
  onClick,
  ...props
}) => {
  // const btnChildren = (
  //   <span className="btnChildren">{children}</span>
  // );

  return (
    <StyledButton type={type} onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton> 
  );
}

export default Button;
