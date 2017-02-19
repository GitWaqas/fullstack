


//Ex1
//sort of like JAVA's private final  
const PI = 3.141593
PI > 3.0 

//Variables declared with var are hoisted to top, default javascript behaviour, let is within the block scope.
let a=[1,2,3]
let b=[1,8]
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;


//The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement. 
{
    function foo () {
         return 1 
        }
    foo() === 1
    {
        function foo () {
             return 2 
            }
        foo() === 2
    }
    foo() === 1
}


//Ex2
//function(){...} can be written with arrow function
var evens = [2,4,10,16];
var odds = evens.map(v => v+1) // plus 1 to get odd number
console.log(odds);
//as a result, all the elements are undefined. The statement block behaves like a normal function body. For example, you need return to give back a value. With an expression body, the expression is always implicitly returned.
var odds = evens.map(v => {
  return v+1 
});
console.log(odds);

//Ex 3
// to bind a value of "this" so you know what this is.

function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      this.fives.push(v);
    }
  }.bind(this));
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);


var numbers1 = new Numbers1([1,3,5,10,14,20,33,50]);
console.log(numbers1.fives);


var counter = {
    count : 0 ,
    inc : () =>this.count++
}
var func = counter.inc ;
func();
console.log ( counter.count ); // should be 0
counter.inc(); // run method 
console.log( counter.count ); //count incremented


//EX4
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)

//EX5 a

function f(x,y,bln,z,str,arr,date, obj){
  return `Sum: ${x + y}
rest value 1 is a: ${bln.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${str.constructor.name}
rest value 4 is a: ${arr.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}`
}

console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

//EX5 b
var rest = [ 
    true , 
    2 , 
    "hello World" ,
    [ 1 , 2 , 3 ], 
    new Date(),{}
    ];
var restParams = [ ... rest];
console. log ( f( 5 , 2 ,... restParams));

//EX5 c return character array
var chars = [... f( 5 , 2 ,... restParams )];
console.log(chars);

//EX6
let fName = "Kurt" ;
let lName = "Wonnegut" ;
let age = 98;
//same done es2015 style: 
let obj = {fName, lName, age};

console.log(obj.fName + " "+ obj.lName + "-" + age)

//EX7 a this seems like some weird voodoo magic 
let fisrtName = "Kurt" ;
let lastName = "Wonnegut" ;
[fName1,lName1] = [lastName,fisrtName];

console.log( `First: ${ firstName}, Last: ${ lastName} `);

//EX7 b Object Matching Shorthand notation
function getPerson(){
    return {
        firstName : "Kurt" ,
        lastName : "Wonnegut" ,
        gender : "Male" ,
        email : "kurt@wonnegut.dk" ,
        phone : "12345" ,
    }
}

// extract the values from key in getPerson()
var {lastName, phone} = getPerson();

console.log(lastName, phone);



//ex10
// the asterix symbol means that it is a generator
function * makeNames() {
    let firstNames = ["Donald", "Goofy", "Daisy", "Dewey", "Pluto"];
    let lastNames = ["Duck", "Jefferson", "Obama", "Einstein", "Wasington"];

    //infinite loop
   while(true){
        let rnd1 = Math.floor((Math.random() * 4) + 1); 
        let rnd2 = Math.floor((Math.random() * 4) + 1); 
        let person = yield {fName: firstNames[rnd1], lName: lastNames[rnd2]};
    }

}

// prints untill count is 50
let count = 0 ;
for ( let name of makeNames()) {
    console.log(name);
    if (count++ === 50) {
        break;
    }
}


//EX8
//insert code form another js file, works kind of like <include> tag in html

const f = require('./anotherModule.js');

console. log ( f.myFunction( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

//EX9 a class with constructor, getter/setter and toString method, sort of like java interface
class Shape {
    constructor (color){
        this.color = color;
    }
    getArea () {
        return undefined ;
    }
    getPerimeter () {
        return undefined ;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    toString(){
        return `The shape's color is ${this.color} `;
    }
}


let myShape = new Shape('Purple');
console.log(myShape.toString());

myShape.setColor('Blue');

console.log(`Get Color: ${myShape.color}`);

//EX 9 b Inheritance - like overrid annotation from java.
class Circle extends Shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

   getArea(){
        return Math.pow(this.radius, 2) * Math.PI; //A = PI(r^2)
   }

   getPerimeter(){
       return 2 * Math.PI * this.radius; // P = 2*PI*r
   }

   getRadius(){
       return this.radius;
   }
   setRadius(radius){
       this.radius = radius;
   }
}

let circle = new Circle('Red',8);

console.log(`Radius: ${circle.getRadius()}
Area: ${circle.getArea()}
Perimeter: ${circle.getPerimeter()}
`);

//EX9 c

class Cylinder extends Circle{
    constructor(color, radius, height){
        super(color,radius)
        this.height = height;
    }
    getArea(){
      this.area = 1;
        return this.area;
   }

   getPerimeter(){
       return undefined;
   }

   getRadius(){
       return this.radius;
   }

   getVolume(){
     this.volume = this.height * (Math.pow(this.radius, 2) * Math.PI);
     return this.volume; //V = A*h
   }

   getHeight(){
       return this.radius;
   }
   setHeight(height){
       this.height = height;
   }

}

let cyl = new Cylinder("Black", 8,9);

console.log(`Height: ${cyl.getHeight()}
Area: ${cyl.getArea()}
Perimeter: ${cyl.getPerimeter()}
Volume: ${cyl.getVolume()}
`);

//EX9 d
console.log("D: ")
console.log("Height:" + cyl.height)
console.log("Area:"+ cyl.area)
console.log("Perimeter: "+ cyl.perimeter)
console.log("Volume:" + cyl.volume)


