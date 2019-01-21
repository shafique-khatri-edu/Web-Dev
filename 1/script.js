

/*
// Declaring a variable ;
var firstName = "shafique";
var lastName = "khatri";

console.log(firstName + " " + lastName);

var shafiqueAge, aftabAge, sabaAge;

shafiqueAge = 21;
aftabAge = 19;
sabaAge = 19;

// logical oprater 

var isShafiqueOler = shafiqueAge > aftabAge;

console.log(isShafiqueOler);


// type off system to the type of datatype the variable is holding 

console.log(typeof shafiqueAge);
console.log(typeof aftabAge);
console.log(typeof firstName);
console.log(typeof isShafiqueOler);



// oratin precidence 
// refer the table 

var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26 

console.log(x, y);

x = x * 2;
x *= 2;

console.log(x);

x = x++; // same as x = x + 1 
x = x--; // same as x = x - 1 

// even simpler is 

x++ // same as x = x + 1 
x-- // same as x = x - 1

// off the record

var fName = prompt("First name ?");
*/
// coding challenge #01

var MarkHeight, MarkMass, JohnHeight, JhonMass;

MarkHeight = 1.68;
MarkMass = 55;

JohnHeight = 1.78;
JohnMass = 47;

var MarkBMI = MarkMass / (MarkHeight * MarkHeight);
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);

console.log("Mark's BMI is  " + MarkBMI, "John's BMI is " + JohnBMI);

var MarkHigherBMI = MarkBMI > JohnBMI;

console.log("Is Mark's BMI higher then John's ?" + " " + MarkHigherBMI);
