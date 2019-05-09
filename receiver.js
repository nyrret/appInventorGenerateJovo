// WebSocket server to listen for requests to create jovo files

var WebSocketServer = require('websocket').server;
var http = require('http');

var port = 8080;

var server = http.createServer(function (request, response) {
  // TODO: process http requests, listen for information
});
server.listen(port, function () {});

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // store data as app.js code
            var appJS = message.utf8Data;
            console.log("app.js content: " + appJS);

            // create app.js file
            var fs = require('fs');
            fs.writeFile('app.js', appJS, function (err) {
              if (err) throw err;
              console.log('app.js file created successfully.');
            }); 

            // BASH script to create jovo project and add app.js file
            const exec = require('child_process').exec;
            var yourscript = exec('sh createJovoProject.sh test',
                    (error, stdout, stderr) => {
                        console.log(stdout);
                        console.log(stderr);
                        if (error !== null) {
                            console.log(`exec error: ${error}`);
                        }
                    });
        }
    });

    connection.on('close', function (connection) {
        // close user connection
        console.log("Closed connection.");
    });
});

