//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationArray) {
  if (formationArray.length === 0) {
    return null;
  }

  return {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2]
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter(player => player.debut === year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter(player => player.position === position);
}
//Progression 5 - Filter players that have won ______ award
function filterByAwardxTimes(award, times) {
  return players.filter(player =>
    player.awards.filter(a => a.name === award).length === times
  );
}

function filterByNoOfAwardsxTeamxAge(awards, team, age) {
  return players.filter(player =>
    player.awards.length >= awards &&
    player.team === team &&
    player.age < age
  );
}
function filterByAward(award) {
  return players.filter(player => player.awards.some(a => a.name === award));
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardTimes(award, times) {
  return players.filter(player => 
    player.awards.filter(a => a.name === award).length === times
  );
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country) {
  return players.filter(player =>
    player.awards.some(a => a.name === award) && player.country === country
  );
}
function filterByAwardCountry(country) {
  return players.filter(player => player.awards.some(a => a.name === award));}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterPlayers(awards, team, age) {
  return players.filter(player => 
    player.awards.length >= awards && 
    player.team === team && 
    player.age < age
  );
}

//Progression 9 - Sort players in descending order of their age
function sortPlayersByAge() {
  return players.sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortPlayersByAwards(team) {
  return players
    .filter(player => player.team === team)
    .sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortPlayersByAwardTimesCountry(award, times, country) {
  return players
    .filter(player => 
      player.awards.filter(a => a.name === award).length === times && 
      player.country === country
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortOldPlayersByAwards(years) {
  return players
    .filter(player => player.age > years)
    .sort((a, b) => {
      const aName = a.name.localeCompare(b.name);
      if (aName !== 0) return aName;
      return b.awards[0].year - a.awards[0].year;
    });
}