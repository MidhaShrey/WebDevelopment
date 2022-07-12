// ARRAYS and OBJECTS
console.log("Tutorial 7");
let marks=[1,3,4,5,6,7,8];
const fruits=['orange','grapes','mangoes'];
const mixed = ['str',23,[1,2]];
console.log(fruits);
console.log(mixed);
const arr = new Array(23,13,'orange');
console.log(arr.length);
console.log(Array.isArray('dff'));
arr[0]='shaurya';

let val = marks.indexOf(23);
console.log(val);
marks.push(222);
console.log(marks);
marks.unshift(100);//Insert in front
marks.pop();
marks.shift();//Pop from front 
marks.splice(1,2);
marks.reverse();
let marks2 = [1,2,3,4]
marks.concat(marks2);

let myobj = {
	'first name':'shrey',
	mname:'shrey',
	channel:"codewithshrey",
	isActive:true,
	marks:[1,2,3,4,5]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);
console.log(myobj['first name'])