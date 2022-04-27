import React, { FC } from 'react';
import styled, {css} from 'styled-components';

import { ButtonProps } from './Button.types';

// consider putting styles in separate ts file:
// https://stackoverflow.com/questions/56136220/multiple-prop-checks-in-styled-components

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
  border: ${props => props.primary ? "none" : "1px solid #000"};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? "default" : "hand"};

  &:hover, &:active {
    background-color: ${props => props.primary ? "#8787F0"
    : props.disabled ? "transparent" : "#5B5BEE"};
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
