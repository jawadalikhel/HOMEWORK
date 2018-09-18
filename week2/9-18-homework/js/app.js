console.log('js is running');
// // 1. Data types
// A light switch that can be either on or off.
// - a Booleans
// 	-if(if light === true){
// 		console.log('the light is on')
// 	}
// 	else(
// 		console.log('the light is off')
// 		)

// A user's email address.
// 	-use string 
// 	-person.email = "abcd@yahoo.com";
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// 	-use string
// A list of student names from our class.
// 	--string
// A list of student names from our class, each with a location.
// 	-string 
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// 	-strings

///////////////////////////////////////

// // 2. Take it Easy
// // 1.
// const array = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet'];
// //2. 
// console.log(array[4]);
// //3.
// const jawad = {
// 	name: 'Jawad Alikhel',
// 	favoriteFood: 'Burgers',
// 	hobby: 'Photography',
// 	currentTown: 'Austin',
// 	favDataType: 'array'
// }
// //4.
// console.log(jawad.hobby);

///////////////////////////////////////

// 3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
//1.
console.log(crazyObject.taco[1].salsa[5]);
//2. 
console.log(crazyObject.larry.quotes[0]);
//3.
console.log(crazyObject.larry.characters[2].favourtieHobby);
//4.
console.log(crazyObject.larry.nicknames[1]);
//5.
console.log(crazyObject.larry.characters[1].name);









































