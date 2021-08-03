const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const name = "vinod";


//private function is defined like this
//called module wrapper in node ( called iife in js)
(function(exports, require, module, __filename, __dirname) { //these arguments are available to all node programs by default
    const name = "vinod";
    console.log(name);
    //you can export from here also
}()); //to invoke the function, simply call () after the function

module.exports = { add, sub };