/**
 Particle Chamber
This problem involves simulating a particle chamber where individual particles leave the chamber at a constant speed. The user must implement a method called 

animate that takes two arguments: initialPosition (a string) and speed (a number).

Input and Rules
initialPosition is a string representing the chamber. A dot (

.) means no particle is present, an "R" means a particle is traveling to the right, and an "L" means a particle is traveling to the left.


speed is the number of positions each particle travels in a given step.

The function should return an array of strings representing the particles' journey at each step until all particles have exited the chamber.

In the output, each particle must be represented by the letter "X". The last string in the returned array will show all particles out of the chamber.


Examples

Speed = 2, initialPosition = "..R...." 

Returns: ["..X....", "....X..", "......X"].

The single particle starts at position 3, moves to 5, then 7, and then exits the chamber.



Speed = 3, initialPosition = "RR..LRL" 

Returns: ["XX..XXX", ".X.XX..", "X.....X", "......."].

At step 1, there are 4 particles in the chamber, but two pass through each other at the 4th position.


Speed = 2, initialPosition = "LRLR.LRLR" 

Returns: ["XXXX.XXXX", "X..X.X..X", ".X.X.X.X.", ".X.....X.", "........."].

At step 0, there are 8 particles. At step 1, there are still 6 particles, but only 4 positions are occupied because particles are passing through each other.


Speed = 10, initialPosition = "RLRLRLRLRL" 

Returns: ["XXXXXXXXXX", ".........."].


The particles are moving so fast that they all exit the chamber by step 1.
 * 
 */

function animate(initialPosition: string, speed: number): string[] {
  const states: string[][] = [];
  let chamberLength = initialPosition.length;

  let currentChamber = initialPosition.split('');
  let hasParticle = initialPosition.includes('L') || initialPosition.includes('R');

  states.push(currentChamber);

  while (hasParticle) {
    let nextChamber: string[] = Array(chamberLength).fill('.');
    hasParticle = false;

    for (let i = 0; i < chamberLength; i++) {
      const particle = currentChamber[i];

      let isDoubleParticle = false;
      if(particle === "RL" || particle === "LR") {
        isDoubleParticle = true;
      }
      if (particle === 'R' || isDoubleParticle) {
        const newPos = i + speed;
        if (newPos < chamberLength) {
          nextChamber[newPos] = nextChamber[newPos] === '.' ? 'R' : nextChamber[newPos]+'R';
          hasParticle = true;
        }
      }
      if (particle === 'L' || isDoubleParticle) {
        const newPos = i - speed;
        if (newPos >= 0) {
          nextChamber[newPos] = nextChamber[newPos] === '.' ? 'L' : nextChamber[newPos]+'L';
          hasParticle = true;
        }
      }
    }

    states.push(nextChamber);
    currentChamber = nextChamber;
  }


  return states.map((chamber) => {
    return chamber
    .map(char => ((char === 'RL' || char === 'LR' || char === 'R' || char === 'L') ? 'X' : '.'))
    .join('');
  });
}


const test2 = (init, speed, expected) => {
  const r = animate(init, speed);
  console.log(`Test: "${expected}" to be "${r}"`);
  console.assert(expected.every((el, i) => el === r[i]), "Failed %o", {init, speed, r});
}

test2("..R....", 2, ["..X....", "....X..","......X", "......."]);
test2("RR..LRL", 3, ["XX..XXX", ".X.XX.." ,"X.....X", "......."]);
test2("LRLR.LRLR", 2, ["XXXX.XXXX", "X..X.X..X", ".X.X.X.X.", ".X.....X.","........."]);
test2("LRLRLRLRLR", 10, ["XXXXXXXXXX", ".........."]);
