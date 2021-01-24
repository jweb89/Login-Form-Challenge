## Prompt:
Build a React Native app using your favorite boilerplate or seed (or from scratch), that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in You are free to use whatever tooling you want and whatever libraries you feel best solves the problem. Bonus points if the form looks sharp.

1. The login form should have an email input and a password input.

2. The login form should validate that the email is a valid email input and the password field has at least one character before you process the submit action.

3. You are free to do real-time, on change, or submit validation - extra points for realtime.

4. Build a unit test for the form - testing both a valid login and an invalid login. you are free to use whatever testing stack you like.

5. Include a "dev" or "run" script in your package.json scripts

6. Include a "test" script in your package.json scripts

7. Upload to a code sharing service such as GitHub, Gitlab, etc. and let us know where to find it.

- reqres.in(api)

## How to run:
1. Clone repo

2. run "npm install"

3. run "npm start" you should be given a qr code to scan

4. scan qr code or run on emulator(if scanning qr code you will need to download expo on your device)

5. To test form run "npm test" - To stop testing use CTRL+C on the terminal

## Dependecnies and choices

1. Expo template

2. react-native-elements 
- used for nice looking inputs

3. react-native-paper
- used for buttons 

4. Jest/testing-library/react-native

5. Eslint dev dependencies for formatting and linting

6. Wrote Form.test.js to test the entire form. The test determines if the form inputs are valid and checks against the styling of the submit button to verify it is appropriately enabled or disabled. I could have extracted the validation logic into a function and simply tested the function based on inputs, but I decided to test the entire form to be more thorough. For example if somehow the submit button disabled prop was modified the tests would still pass if it were just a function. Whereas testing against the button styling would solve that problem and the tests would fail.



## Notes
- Form validates email format and requires that there is at least 1 character in password before the button is enabled
- To login succesfully and be navigated to Login success screen please use:
- "eve.holt@reqres.in"
- at least one character as password