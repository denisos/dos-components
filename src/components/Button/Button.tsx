import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';

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
  onClick,
  ...props
}) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton> 
  );
}

export default Button;
