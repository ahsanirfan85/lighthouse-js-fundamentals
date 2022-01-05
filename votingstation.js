var choice1 = []

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (array) {
  var choice = []
  for (var i = 0; i < array.length; i++) {
    if (array [i][1] > 20 && (array [i][2] === 'school' || array [i][2] === 'community centre')) {
      choice.push (array [i][0]);
    }
  }
  return choice;
}

choice1 = chooseStations(stations);
console.log(choice1);