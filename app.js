/*
    NAME: Michael Pierce
    DATE: Feb 17, 2022
    PURPOSE: Kill Death Ratio Calculator
*/

// Functions

let myGame = '';
let stats = [];
let avgKDR = 0;
let add = 'y';

function calculateKDR(kills, deaths) {
  if (deaths <= 0) {
    return kills;
  }

  return kills / deaths;
}

let calculateAvgKDR = function () {
  let totalKDR = 0;
  stats.forEach((element) => {
    totalKDR += element;
  });

  return totalKDR / stats.length;
};

let promptForNumber = (msg) => {
  return parseInt(prompt(msg, 0));
};

let validateKDRInputs = (kills, deaths) => {
  if (isNaN(kills) || isNaN(deaths)) {
    return false;
  }

  return true;
};

let dw = (content) => {
  document.writeln(content);
};

myGame = prompt('Enter the FPS Game: ', '');

while (add == 'y') {
  let kills = promptForNumber('Enter kills for the round:');
  let deaths = promptForNumber('Enter deaths for this round:');
  if (validateKDRInputs(kills, deaths)) {
    stats[stats.length] = calculateKDR(kills, deaths);
  }
  add = prompt('Add another round?', 'y');
}

avgKDR = calculateAvgKDR();
