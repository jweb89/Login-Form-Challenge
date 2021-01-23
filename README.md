Prompt:
Build a React Native app using your favorite boilerplate or seed (or from scratch), that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in You are free to use whatever tooling you want and whatever libraries you feel best solves the problem. Bonus points if the form looks sharp.

1. The login form should have an email input and a password input.

2. The login form should validate that the email is a valid email input and the password field has at least one character before you process the submit action.

3. You are free to do real-time, on change, or submit validation - extra points for realtime.

4. Build a unit test for the form - testing both a valid login and an invalid login. you are free to use whatever testing stack you like.

5. Include a "dev" or "run" script in your package.json scripts

6. Include a "test" script in your package.json scripts

7. Upload to a code sharing service such as GitHub, Gitlab, etc. and let us know where to find it.

reqres.in

How to run:
open up terminal and run "npm install" and then "npm start" you should be given a qr code to scan
and run on your phone(you will need to download expo from the app store) or you can run it on an emulator

How to test: Run "npm test" this does watch for saves. To stop testing use CTRL+C on the terminal

Form validates that the email is in the correct format and there is at least 1 character in the password field

To login succesfully and be navigated to Login success screen please use:
"email": "eve.holt@reqres.in",
"password": "cityslicka"