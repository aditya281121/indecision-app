var nameVar = "Aditya";//can do everuthing with var
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen"; //cannot redeclare but can reassign values
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank"; //cannot redeclare or reassign
console.log("nameConst", nameConst);

//Block Scoping - var is function scoped whereas let and const are block scoped
const fullName = "Aditya Chauhan";
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
//Always use const. Only use let if you know you have to reassign the variable