/*Data Types in JS
1.Primitive(Memory allocation is in Stack)
2.Referenced(Memory allocation is in queue)
*/
// String
let sname="shrey";
console.log("my string is"+ sname);
console.log(typeof sname) ;
// Number
let marks=98;
console.log("my string is"+ marks);
// Boolean
let istry = true;
console.log(istry,typeof(istry))
// Null
let nullVar = null;
console.log(typeof nullVar);
// undefined
let undef =  undefined;
console.log(typeof undef);
// Object
myar=[1,2,3,4,true,'string'];
console.log(myar,typeof myar);
// Object Literal
let stMarks={
	harry:25,
	astra:30
}
console.log(stMarks);
console.log(typeof stMarks);

function findName() {
	
}
console.log(typeof findName);
let date = new Date();
console.log(typeof date);
console.log(date);