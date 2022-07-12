console.log("This is the 6th tutorial file");
console.log('This file is used to learn about String Functions');
const name = 'shrey ';
const greet = 'good morning!!!';
// console.log(name+greet);
let html="<H1>this is a heading</H1>";
// console.log(html.concat(name));
// console.log(html.length+" "+html.toLocaleLowerCase());
html=html.concat("Will score well");
console.log(html);
console.clear();
// console.log(html[1]);
// console.log(html.indexOf('this'));
console.log(html.lastIndexOf('is'));
// console.log("character at 4th index"+":"+html.charAt(4));
// console.log(html.endsWith('no'));
// console.log(html.includes('is'));
// console.log(html.substring(3,6));
// console.log(html.slice(0,9));//Same as substring
// console.log(html.split(' '));//The argument is the initiator to break
console.log(html.replace('this ','to'));
console.clear();
let fruit=['orange','apple','mango'];
let myhtml=`hello ${name}<h1>this is a heading</h1> and ${fruit[2]}`;
// console.log(myhtml);
document.body.innerHTML = myhtml;