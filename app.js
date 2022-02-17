/*
    NAME: Michael Pierce
    DATE: Feb 17, 2022
    PURPOSE: Kill Death Ratio Calculator
*/

// Functions

let myGame = '';
let stats = [];
let avgKDR = 0;
let add = new String();

function calculateKDR(kills, deaths) {
  if (deaths <= 0) {
    return kills;
  }

  return kills / deaths;
}

let calculateAvgKDR = function () {
  let totalKDR = 0;
  stats.forEach((element) => {
    totalKDR += stats[element];
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
