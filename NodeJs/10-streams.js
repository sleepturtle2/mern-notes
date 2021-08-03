/*
Streams are objects that let you read data from a source or write data to a destination in continuous fashion. in nodejs there are 4 kinds of streams -

readable - stream which is used for read operation
writable - stream which is used for write operation
duplex - stream which is used for both read and write operation
transform - a type of duplex stream where the output is computed based on the input


each type of Stream is an EventEmitter instance and throws several events at different instances of times. for eg some of the commonly used events are:

data - this event is fired when there is data available to read
end - this event is fired when there is no more data to read
error - this event is fired when there is any error receiving or writing data
finish - this event is fired when all the data has been flushed to underlying system
*/

const fs = require('fs')
const http = require('http')

const server = http.createServer();
server.on('request', (request, response) => {
    var fs = require('fs');
    fs.readFile('08-json.js', (error, data) => {
        if (error) return console.error(error);
        response.end(data.toString());
    })
})

server.listen(8000, "127.0.0.1");