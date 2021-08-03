/*
The http.createServer() method includes request and response parameters which is supplied by Node.js

The request object can be used to get information about the current HTTP request, eg url, request header, and data.

The response object can be used to send a response for a current HTTP request.

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type.
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.url);
    //routing
    if (request.url == '/')
        response.end("Home Page");
    else if (request.url == '/about')
        response.end("About Page");
    else if (request.url == '/json') {
        fs.readFile(`${__dirname}/08-json.js`, 'utf-8', (error, data) => {
            if (error)
                throw error;

            if (data) {
                console.log(data);
                response.end('check your console');
            }
        })
    } else
        response.end("Some other page");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("listening to port 3000");
});