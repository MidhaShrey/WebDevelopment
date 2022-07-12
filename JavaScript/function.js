// two types of functions
// alert() 
// prompt()

function greeting(age,location) {
	var name = prompt("what is your name?");
	alert("HI " + name + " !!!how are you?" + age);
	var dogage = age / 1.5;
	alert("the dog age" + dogage);
	return dogage;
	name = prompt("whats your name");
	console.log(name);
}

greeting(24);

// then in console print (name)