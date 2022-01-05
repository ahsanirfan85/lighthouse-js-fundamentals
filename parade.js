var oP = [0,0]
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  originalPosition = [0,0];
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      originalPosition[1] += 1;
    } else if (moves[i] === 'south') {
      originalPosition[1] -= 1;
    } else if (moves[i] === 'east') {
      originalPosition[0] += 1;
    } else if (moves[i] === 'west') {
      originalPosition[0] -= 1;
    }
  }
  return originalPosition;
}

oP = finalPosition(moves);
console.log(oP);