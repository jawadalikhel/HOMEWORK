function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//// get random for arbineary numbers from .6 to .8
function getRandomArb(min, max){
	return Math.random() * (max - min) + min;
}

class Alien {
  constructor() {
  this.hull = getRandomInt(3, 6);
  this.firepower = getRandomInt(2, 4);
  this.accuracy = getRandomArb(.6, .8);
  }
}


let Uss = {
	hull: 20,
	firepower: 5,
	accuracy: .7,
}

let alienArray  = []
for(let i =0; i < 6; i++){
	let spaceX = new Alien();
	alienArray.push(spaceX);
}
console.log(alienArray);


for(let x = Alien.hull; x > 0; x--){
	if(Uss.accuracy > Alien.accuracy)
{
		Uss.hull -= Alien.firepower;

	}else{
		Alien.hull -= Uss.firepower;
	}

	if(Uss.hull <= 0){
		console.log('USS lost');
		break;
	}
	if(alienArray === 0){
		console.log('Alien won!');
		break;
	}
}
console.log('Alien Health: ' + Alien.hull);
console.log('USS Health: ' + Uss.hull);






































