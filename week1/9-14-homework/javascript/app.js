//// 1. Verbal questions
// What is the difference between a parameter and an argument?
// - parameters is the variable in the declatation of function
// - arguments are the data we data we are passing into parameters

// Within a function, what is the difference between return and console.log?
// -console.log will write the argument from our funtion in the console
// - return is used to just get the outcome of something

// What are the implications of the ability of a function to return a value?
// -return by value
// -return by reference

///////////////

//// 2. Palindrome again
const checkName = (str) => {

	let change = str.toUpperCase();

	str = str.split("").reverse("").join("").toUpperCase();

	if(change === str)
	{
		return true;
	}

	else {
		return false;
	}

}

console.log(checkName('Anna'));
















