console.log("This is DOM Selector Tutorial 14");

// DOM Selectors

// There are 2 Types of element selector
// 1. Single element selector
// 2. Multi element selector

// 1. Single element selector 
let element =  document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode; 

element.style.color = 'red';
console.log(element);
element.innerText = "Shrey is a good coder";
element.innerHTML = "<b></b>";

let sel = document.querySelector('#id'); //#myfirst
sel = document.querySelector('.child'); //.child
sel = document.querySelector('div'); //Directly Tag name

sel.style.color = 'green';
console.log(sel);


// 2. Multi element selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');

console.log(elem[0].getElementsByClassName('element'));

elem = document.getElementsByTagName('div');


Array.from(elem).forEach(function(element) {
	console.log(element);
	element.style.color = 'blue';
});