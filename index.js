function dwarfRollCall(dwarves) {
  for (var i = 0; i < dwarves.length; i++) {
    dwarves[i] = dwarves.indexOf(dwarves[i]) + 1 + ". " + dwarves[i] + " ";
    if (dwarves[i] === dwarves.lenght -1) {
      dwarves[i] = dwarves.indexOf(dwarves[i]) + 1 + ". " + dwarves[i];
    }
    }
  return dwarves.join('');

}


function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase + "!"
  }
  return planeteerCalls;
}


function longPlaneteerCalls(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      return true;
    }
    else {
      return false;
    }
  }
}

function findTheCheese(array) {
  for (var i = 0; i < array.length; i++) {
  if  (array[i] == 'cheddar' || array[i] == 'gouda' || array[i] == 'camembert') {
      return array[i];
    }
    else {
    continue
    }
  }
  return 'no cheese!';
}
