// //console.log('js is running');
const arrayOfPokemon =
	[
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]


const dealCards = (array) => {
	/// takes min and max value and this will give random num in middle of those
	function getRandomInt(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	// console.log(array[getRandomInt(0, array.length)]);
	//this gives us the random number betwon 0 and 18 which is in array
	let randomC = getRandomInt(0, array.length);
	/// push 2 items in new array and return it at the end 
	let cardArray = [];
	
	// run 3 times to display 3 cards
	for(let i = 0; i < 3; i++){
		/// so it can hold my card
		let card = 0;
		// take out 1 card randomly 
		// removes one item from array .splice
		card = array.splice(randomC, 1);
		///push the item into the new array
		cardArray = cardArray.concat(card);
	}
	//// return the array of the 3 cards
	return cardArray;
}

console.log(dealCards(arrayOfPokemon));


const computerDeal = (array) =>{
	let computerArray = array;
	// run 3 times to display 3 cards
	for(let i = 0; i < 3; i++){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	//// return the array of the 3 cards
	return array.splice[getRandomInt(0, array.length), 1];
}

//// pass in 2 array, 1 for player and 1 for pc
//// 
const battle = (player, pc) =>{
	for(let i = 0; i <3; i++){
		if(playerCardDamage > pcCardDamage){
			playScore += 1;
		}
		else if(playerCardDamage < pcCardDamage){
			pcScore += 1;
      console.log(pcScore[i]);
		}
		else{
			playScore += 1;
			pcScore += 1;
		}
	}
}
//console.log(battle);


//////////////////////////////////////////////////////

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//// get random for arbineary numbers from .6 to .8
// function getRandomArb(min, max){
//   return Math.random() * (max - min) + min;
// }

//   const pokemonArray = [
//   {
//     name: "Bulbasaur",
//     damage: 60
//   }, {
//     name: "Caterpie",
//     damage: 40
//   }, {
//     name: "Charmander",
//     damage: 60
//   }, {
//     name: "Clefairy",
//     damage: 50
//   }, {
//     name: "Jigglypuff",
//     damage: 60
//   }, {
//     name: "Mankey",
//     damage: 30
//   }, {
//     name: "Meowth",
//     damage: 60
//   }, {
//     name: "Nidoran - female",
//     damage: 60
//   }, {
//     name: "Nidoran - male",
//     damage: 50
//   }, {
//     name: "Oddish",
//     damage: 40
//   }, {
//     name: "Pidgey",
//     damage: 50
//   }, {
//     name: "Pikachu",
//     damage: 50
//   }, {
//     name: "Poliwag",
//     damage: 50
//   }, {
//     name: "Psyduck",
//     damage: 60
//   }, {
//     name: "Rattata",
//     damage: 30
//   }, {
//     name: "Squirtle",
//     damage: 60
//   }, {
//     name: "Vulpix",
//     damage: 50
//   }, {
//     name: "Weedle", 
//     damage: 40
//   }
// ]

// // class Computer {
// //   this.randomCards = getRandomInt(0, 17)
// // }

// // class Player {
// //   constructor(){
// //       this.randomCards = getRandomInt(pokemonArray[0].damage, pokemonArray[17].damage)
// //   }
// // }

// // const Alien = {

// // }

// const player = {
//   playCards(){
//     randomCards = getRandomInt(pokemonArray[0], pokemonArray[17])
//   }
// }
// //console.log(player.playCards());























