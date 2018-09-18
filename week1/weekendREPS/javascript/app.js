console.log('js is working here!');

// I. Variables & Datatypes
//  A. Q + A

// 1. How do we assign a value to a variable?
// 	- let x = 5;
// 2. How do we change the value of a variable?
// 	ex: let myName = 'jawad'
// 		console.log(myName) ---> jawad
// 		myName = 'sahil'
// 		console.log(myName) ---> sahil

// 3. How do we assign an existing variable to a new variable?
// 4. Remind me, what are declare, assign, and define?
// 	-declaration is a statement that describes an identifier, such as the name of a variable or a function.
// 	-assign is when you assign a value to a varialbe 
// 	-
// 5. What is pseudocoding and why should you do it?
// 	- is writing down the logic for a solution to a specific coding
// 	  challenge using plain English.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 	- planning : 75-90%
// 	- typing code: 10-25%

//////////////////////////////////////////////

// // B. Strings
// // 1.
// let firstVariable = 'Hello World';
// firstVariable = 10;
// console.log(firstVariable);

// secondVariable = firstVariable;
// console.log(secondVariable);

// secondVariable = 'Changing the secondVariable to this string';
// console.log(secondVariable);

// // 2. 
// let yourName = 'Jawad Alikhel';
// console.log('Hello, my name is ' + yourName);

///////////////////////////////////////////////////

// // C. Booleans

//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a, b);
//   console.log(c, d);
//   console.log('Name', 'Name');
//   console.log(true, false);
//   console.log(false, false, false, false, false, false, true);
//   console.log(false, false)
//   console.log(e, 'Kevin');
//   console.log(a, b, c);
//   console.log(a, a, d);
//   console.log(48, '48');

/////////////////////////////////////////////
//// D. Farm

// let animal = 'cow';
// if(animal === 'cow')
// {
// 	console.log('mooooooo');
// }

// else{
// 	console.log('Hey! You\'re not a cow');
// }

//////////////////////////////////////
// // E. Driver's Ed
// let age = 16;
// if(age >= 16)
// {
// 	console.log('Here are the keys.');
// }
// else{
// 	console.log('Sorry, you\'re too young.');
// }

////////////////////   II. Loops    //////////////

// // A. The basics

// for(let i=0; i <= 10; i++)
// {
// 	console.log(i);
// }

// for(let j = 10; j <= 400; j++)
// {
// 	console.log(j);
// }

// for(let k = 12; k <= 4000; k++)
// {
// 	console.log(k);
// 	k+=2;
// }

/////////////////////////////////////////////

// // B. Get even

// for(let i = 1; i <= 100; i++)
// {
// 	if((i % 2) === 0){
// 		console.log(i + ' <-- is an even number');
// 		i++;
// 	}

// }

////////////////////////////////

// // C. Give me Five
// // 1.
// for(let i =1; i <= 100; i++)
// {
// 	if(i % 5 === 0){
// 		console.log('I found a ' + i + " High five!");

// 	}

// 	if(i % 3 === 0){
// 			console.log('I found a ' + i + ". Three is a crowd");
// 		}
// }

////////////////////////////////////////////////////////////

// // D. Saving Account
// // 1.
// sum = 0;
// for(let i =1; i <= 10; i++)
// {
// 	sum += i;
// }
// console.log('Bank Balance: $' + sum);
// // 2.
// sum2 = 0;
// for(let j = 0; j<= 100; j++)
// {
// 	sum2 += j;
// }
// console.log('Bank Balance: $' + (sum2 * 2));

/////////////////////////////////////////////////

// // E. Multiples of 3 and 5
// sum = 0;
// for( let i = 1; i < 1000; i++)
// {
// 	if(i % 3 === 0 || i % 5 === 0)
// 	{
// 		console.log(i);
// 		sum += i;
// 	}
// }

// console.log(sum);

//////////////////////////////////////////////

/////////////////////////  III. Arrays & Control flow/////////////////

// //// A. Talk about it:
// 1. What are the things in an array called?
// -Elements.
// Do Arrays guarantee those things will be in order?
// - yes
// What real-life thing could you model with an array?
// - personal infor with: name, age, address, etc..

////////////////////////////////////

//// B. Easy Does It
// const quotes = ['To succeed in life, you need three things:', 'wishbone', 'backbone', 'funny bone'];
// console.log(quotes);

// //////////////////////////////////////////

// // C. Accessing elements 
// const randomThings = [1, 10, 'Hello', true];

// // 1. to access the first element log the array and inside put the location of the elemetn
// console.log(randomThings[0]);

// randomThings[2] = 'World';
// console.log(randomThings[2]);

// //////////////////////////////////////////

// // D. Change Values
// const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];
// // 1. What would you write to access the 3rd element of the array?
// console.log(ourClass[3]);
// //2.
// ourClass[4] = 'Octocat';
// //3. 
// ourClass.push('Cloud City');
// console.log(ourClass);

//////////////////////////////////////////////

// // E. Mix It Up
// const myArray = [5, 10, 500, 20];
// // 1. adding 2 strings to myArray
// myArray.push('Egon');
// myArray.push('Dawaj');
// console.log(myArray);
// // 2. removing the element 5 from array
// let removed = myArray.splice(0, 1)
// console.log(myArray);
// // 3. Adding an element to the beginning of the array
// myArray.unshift('Bob Marley');
// console.log(myArray);
// // 4. remove a string from the end of the array.
// let remove = myArray.splice(4,1);
// console.log(myArray);
// // 4. Revere the array
// let reverse = myArray.reverse();
// console.log(myArray);

///////////////////////////////

// // F. Biggie Smalls 
// let number = 230;
// if(number < 100){
// 	console.log('Little number');
// }
// else{
// 	console.log('big number');
// }

//////////////////////////////////////
// // G. Monkey in the middle
// let number = 7.5;

// if(number < 5){
// 	console.log('little number');
// }
// else if(number > 10){
// 	console.log('big number');
// }
// else{
// 	console.log('monkey');
// }

/////////////////////////////////////////////////

// // H. What's in Your Closet?
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// // 1.
// console.log('Kristyn is rocking that ' + kristynsCloset[3] + ' today!');
// // 2. adding another iteam in array in position 6
// kristynsCloset.splice(6,0,'raybans');
// // 3. modifying item in array
// kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);

// // 4.
// thomsCloset[0].splice(2,0,'Black shirt');
// console.log(thomsCloset);
// // 5. nested array accesing an element
// console.log(thomsCloset[1][2]);
// // 6.
// console.log(thomsCloset[2][1]);
// // 7.
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] +
// 	', ' + thomsCloset[1][2] + ", and " + thomsCloset[2][2]);
// // 8. 
// thomsCloset[1][2] = 'Footies Pajamas';
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] +
// 	', ' + thomsCloset[1][2] + ", and " + thomsCloset[2][2]);

///// ******************************************
///// ******************************************

// // why does it add the element doing in both the 2nd 

// const random = 
// [
// 	['a','b','c'], [1,2,3], ['A', 'B', 'C'],
// ];

// console.log(random);

// random[1].splice(2,0,'dog');
// console.log(random);
///// ******************************************
///// ******************************************


/////////////////////////    IV. Functions

// // A. printGreeting
// const printGreeting = (name) => {
// 	return 'Hello there, ' + name;
// }

// console.log(printGreeting('Slimer'));

////////////////////////////////////////////////

// // B. printCool
// const printCool = (name) =>{
// 	return (name + ' is cool');
// }
// console.log(printCool('Captin Reynolds'));

////////////////////////////////////////////////
//// *********************
// // c. calculateCube
// const calculateCube = (num) =>{
// 	return ((num * num * num));
// }
// console.log(calculateCube(5));

////////////////////////////////////////////////

//// *********************************
// // D. isVowel
// const isVowel = (letter) =>{
// 	const vowel = ['a', 'e', 'i', 'o', 'u'];

// 	let newVowels = vowel.toUpperCase();

// 	for(let i = 0; i <= vowel.length; i++)
// 	{
// 		if(letter === vowel[i]){
// 			return (letter + ' is a vowel.');
// 		}

// 		else{
// 			return (letter + ' is not a vowel');
// 		}
// 	}

// }

// console.log(isVowel('e'));

////////////////////////////////////////////////
const getTwoLengths = (word1, word2) =>{
	let 
	for (let i =0; i <= word1.length; i++)
	{
		return word1[i];
	}
}
console.log(getTwoLengths('Hank', 'Hippopopalous'));






























