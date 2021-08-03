/*
Events Module
Nodejs has a built-in module called 'Events' where you can create, fire and listen for your events

eg 1 - registering for the event to be fired only one time using once
eg 2 - create an event emitter instance and register a couple of callbacks
eg 3 - registering for the event with callback parameters
*/

const EventEmitter = require('events');

const event = new EventEmitter();

//event.on is similar to javascript addEventListener
//first define emit.on then fire it with emit
event.on('sayMyName', () => {
    console.log('my name is sayan');
})
event.emit('sayMyName');

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200, 'ok');