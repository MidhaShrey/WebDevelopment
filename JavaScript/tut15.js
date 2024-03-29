console.log("This is Tutorial 15");

console.log("In this tutorial we will traverse through DOM");

let cont = document.querySelector('.no');
cont = document.querySelector('.children');
console.log(cont);
// console.log(cont.childNodes);
// console.log(cont.children);

// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);


// Node Types
// 1. Element
// 2. Attributes
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector('div.container');

console.log(container.children);
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
