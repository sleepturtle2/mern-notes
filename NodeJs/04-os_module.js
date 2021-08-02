const os = require('os');

console.log(os.arch()); //architecture, 32/64 bit

const freeMemory = os.freemem();
console.log(`${freeMemory/ 1024 /1024 / 1024} GB`); // freeMemory in bytes

const totalMemory = os.totalmem();
console.log(`${totalMemory/ 1024 / 1024 / 1024} GB`);