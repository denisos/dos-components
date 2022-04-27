import React from "react";
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button tests ', () => {

  test('should be disabled ', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });

  test('should call onClick passed when clicked ', async () => {
    const handleBtnOnClick = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleBtnOnClick}>Click Me</Button>);

    // won't work without await: https://testing-library.com/docs/user-event/intro
    //   and also need to call userEvent.setup() above
    await user.click(screen.getByRole('button', { name: 'Click Me' }));

    expect(handleBtnOnClick).toHaveBeenCalled();
    expect(handleBtnOnClick.mock.calls.length).toBe(1);
  });

});
