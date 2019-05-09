# appInventorGenerateJovo
Code for receiving commands (via a WebSocket) to generate a Jovo project from App Inventor Alexa.  

## Set up
Set up the websocket by opening a terminal in the `server-side` directory and installing the required packages:
```bash
cd server-side
npm install
```

## Usage
To start the local server:
```bash
node receiver.js
```

This code is intended for use with the alexa-jovo branch of appinventor-iot, found here: https://github.com/mit-cml/appinventor-iot

Follow the instructions there to build and run a local AppInventor server on the alexa-jovo branch. 

Once you have a webpage up for AppInventor Alexa, create a skill and code some blocks for it.  Pressing the "Send Endpoint Jovo to Server" button should generate a JavaScript file, and create/deploy a jovo project on your local machine.  The jovo project can be found in a jovoProjects directory outside of the repository (note that you may need to first create this directory yourself).

The jovo server can then be run with the "jovo run" command.

## Refs
Websocket code based off of https://github.com/jessvb/simple-web-socket.
