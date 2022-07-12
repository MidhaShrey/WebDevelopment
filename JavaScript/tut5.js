 // Type Conversion and Type Coercion
// Type Conversion refers to convert one type of variable into another type
let myVar = 34;
console.log(myVar);
myvar1 = String(27);
console.log(myvar1,(typeof myvar1));
let boolval = true;
console.log(boolval);
let boolvar = String(boolval);
console.log(boolvar,typeof boolvar);
let newDate = new Date();
console.log(newDate,typeof newDate);

let ar=[1,2,3,4,5,6,7,8,9,10];
console.log(ar,ar.length,typeof ar);

// ToString Meathod
let i = 1;
console.log(i.toString(),typeof(i));

let j =  new Date();
console.log(j.toDateString());

let str = "1234";
console.log(str,typeof str);
console.log(Number(str));

console.log(Number(true));

// parseInt & parseFloat
// parseInt 
let num = parseInt('34',10);//parseInt(number,radix=2/8/10/16);
console.log(num, typeof num);

// parseFloat
num=parseFloat('35.5566');
console.log(num.toFixed(2),typeof num);
console.log(num.toExponential(30)); //upto 3o decimal positions.

// Type Coercion
let mystr = "222";
let num1 = 22;
console.log(mystr+num1);
// Output 22222