const fs = require('fs');

//if present, contents will be overwritten
//if not present, file will be created
fs.writeFileSync('read.txt', "text data in the file");

fs.appendFileSync('read.txt', "\nappended text");

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data)
    /* Output
    <Buffer 74 65 78 74 20 64 61 74 61 20 69 6e 20 74 68 65 20 66 69 6c 65 0a 61 70 70 65 6e 64 65 64 20 74 65 78 74>
*/

/*
Nodejs includes an additional data type called Buffer(not available in browser's Javascript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.
*/

const str_data = buf_data.toString();
console.log(str_data);
/*output
text data in the file
appended text
*/

//to rename the file
fs.renameSync('read.txt', 'test.txt');

//make folder
fs.mkdirSync('new-dir');
//make file inside the folder
fs.writeFileSync("new-dir/new-file.txt", "test data");
//read
const data = fs.readFileSync('new-dir/new-file.txt');
console.log(data.toString());
//rename
fs.renameSync("new-dir/new-file.txt", "new-dir/new-file2.txt");
//delete file
fs.unlinkSync('new-dir/new-file2.txt');
//delete folder
fs.rmdirSync('new-dir');