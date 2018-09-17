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
const quotes = ['To succeed in life, you need three things:', 'wishbone', 'backbone', 'funny bone'];
console.log(quotes);
























