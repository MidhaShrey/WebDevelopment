console.log("this is tutorial 8");
const age = 28;
const doesdrive = true;

// if (age == 19) {
// 	console.log("Age is 19");
// }
// if (age!=19) {
// 	console.log("Age is not 19");
// }
// if (age!==65) { //Both value and type are not same
// 	console.log("Age is not 65");
// }
// else if (age === 65) { // === checks for type and value both
// 	console.log("Age is 65");
// }
// else {
// 	console.log("Age is not 19");
// }

// console.clear();

// const variable = 34;

// if (typeof variable!== `undefined`) {
// 	console.log("variable exists");
// }
// else {
// 	console.log("variable does not exists");
// }
// check if a person can drive a car 

// if (doesdrive == true && age >= 18)
// {
// 	console.log("can drive");
// }
// else {
// 	console.log("cannot drive");
// 	console.warn("Stop your vehicle");
// }
// console.log(age == 45 ? 'age is 45' : 'age is not 45')

// Switch Case Statements

switch (age) {
	case 80:
		console.log('age is 80');
		break;
	case 28:
		console.log('age is 28');
		break;
	case 38:
		console.log('age is 38');
		break;

	default:
		console.log('You are unknown age');
		break;
}