//// Combine objects, arrays, and functions
// 1.
const obj0 = {
	array1: [1,5,'jawad',10],
}
console.log(obj0.array1[2]);
////////////////////////////////////////
//2.
const outObj = {
	name: 'dawaj',
	age: 27,
	newObj: {
		animal: 'tiger',
		cat: 'Nugget',
	}
}
console.log(outObj.newObj.animal);
////////////////////////////////////////
// 3.
const obj2 = {
	firstName: 'jawad',
	lastName: 'Alikhel',

	fullname: function(){
		return this.firstName + " " + this.lastName;
	}
}
console.log(obj2.fullname());
////////////////////////////////////////
//Combine objects, arrays, and functions more than one level deep

// 1. 