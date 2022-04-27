import React, { FC } from 'react';
import styled, {css} from 'styled-components';

import { ButtonProps } from './Button.types';


const sizeStyled = {
  small: css`min-width: 60px; padding: 6px 18px; font-size: 12px;`,
  medium: css`min-width: 80px; padding: 10px 34px; font-size: 16px;`,
  large: css`min-width: 100px; padding: 10px 34px; font-size: 18px;`
}

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.primary ? "#fff" : "#000"};
  cursor: pointer;
  border-radius: 4px;
  border: none;
  white-space: nowrap;
  vertical-align: middle;
  background-color: ${props => props.primary ? "#5B5BEE" : "#fff"};
  
  &:hover, &:active {
    background-color: ${props => props.primary ? "#8787F0" : "#5B5BEE"};
  }

  ${props => sizeStyled[props.size ?? 'medium']}
`;

const Button: FC<ButtonProps> = ({ 
  disabled,
  size = 'medium',
  primary = false,
  text,
  type = 'button',
  onClick,
  ...props
}) => {
  // const btnChildren = (
  //   <span className="btnChildren">{children}</span>
  // );

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}>
      {text}
    </StyledButton> 
  );
}

export default Button;
