//Setup constructor to take name and age (default to 0)
//getDescription - Andrew Mead is 26 years old;
// getDesscription - Andrew Mead is 26 years old.
class Person {
    // constructor(name = 'Anonymous'){
    //     this.name = name;
    // }
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age
    }

   getGretting(){
    //return 'Hi, I am ' + this.name + '!'; //normal string
      return `Hi, I am ${this.name}!`; //template string   
} 
      getDesciption(){
        return `${this.name} is ${this.age} years old`;
      }

}

class Student extends Person {
    constructor(name , age, major, location){
        super(name,age);
        this.major = major;
        this.location = location;
    }
    hasMajor(){
        return !!this.major;
    }
    getDesciption(){
        let description = super.getDesciption();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }

  
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
      getGretting(){
        let greeting = super.getGretting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }

}

//Traveler -> Person
// Add support for homeLocation
// Override getGreeting
//1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
//2. Hi. I am Andrew Mead.

const me = new Student('John');
console.log(me.getGretting());

const person = new Traveler('Andrew Mead', 26,'Philadelphia')
console.log(person.getGretting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());





