const data = {
    name: "sayan",
    age: 26
}

console.log(data.name);
const jsonData = JSON.stringify(data);
console.log(jsonData); //cannot call properties from here

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.name);