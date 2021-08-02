const fs = require('fs');

fs.writeFile("read.txt", "dummy text", (error) => {
    console.log("file created");
    console.log(error);
})

fs.readFile('read.txt', (error, data) => {
    console.log(data.toString());
})

//alternative
fs.readFile('read.txt', 'utf-8', (error, data) => {
    console.log(data);
})

fs.unlink('read.txt', (error) => {
    if (error)
        throw error;
});