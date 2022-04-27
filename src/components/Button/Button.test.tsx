import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button tests ', () => {

  test('should be disabled ', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should call onClick passed when clicked ', () => {
    const handleBtnOnClick = jest.fn();
    render(<Button onClick={handleBtnOnClick}>Disabled</Button>);

    userEvent.click(screen.getByRole('button'));
    expect(handleBtnOnClick).toHaveBeenCalled();
  });

});