//import './utils'
import subtract ,{ square , add } from './utils.js';
import isSenior,{ isAdult, canDrink } from './person.js';

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX</p>
ReactDOM.render(template, document.getElementById('app'));

// console.log("app.js is running!!")
// console.log(square(4));
// console.log(add(3,4))
// console.log(subtract(5,3))

// console.log(isAdult(32));
// console.log(canDrink(12));
// console.log(isSenior(64));

//person.js
//named export isAdult(18) - true if adult, otherwise false
//named export canDrink(18) - true if 21 and over, otherwise false

//import isAdult and canDrink
//use both printing result to the console

import validator from 'validator'

console.log(validator.isEmail('test@gmail.com'));