import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Form from './Form';

// Test for different cases:
// First invalid due to no password
// Second invalid because no inputs
// Third is valid due to having valid email format and at least one character in password
// Fourth is invalid because email format is incorrect(must have more than one character following the dot)
const cases = [
  ['jbweb89@email.com', '', false],
  ['', '', false],
  ['jbweb89@email.com', 'a', true],
  ['jbweb89@a.c', 'a', false],
];

test.each(cases)(
  'form button is enabled or disabled based on input validation',
  async (email, password, expected) => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    // Grab neccesary components to test the form
    const submitButton = getByText('Submit');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    // Change inputs
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    // console.log(submitButton.props.style[1][3].color);
    // Check if button is disabled or enabled(disabled/enabled is not a prop so had to check based on color). If enabled text color is '#ffffff', if disabled  rgba(0, 0, 0, 0.32). Uncomment above console log to see. Could have just tested a function in form that checks for validity but this is a better test since it tests the whole component validity not just single function.

    expect(submitButton.props.style[1][3].color === '#ffffff').toEqual(
      expected
    );
  }
);
