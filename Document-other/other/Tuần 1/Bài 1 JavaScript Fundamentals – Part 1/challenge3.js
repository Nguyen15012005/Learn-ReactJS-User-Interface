const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const handleCheckWinner = (firstTeam, secondTeam, testCaseNumber) => {
  console.log(`TEST CASE ${testCaseNumber}`);
  console.log(firstTeam);
  console.log(secondTeam);

  const firstTeamAvg = calcAverage(
    firstTeam.score[0],
    firstTeam.score[1],
    firstTeam.score[2]
  );

  const secondTeamAvg = calcAverage(
    secondTeam.score[0],
    secondTeam.score[1],
    secondTeam.score[2]
  );

  if (firstTeamAvg < 100 && secondTeamAvg < 100) {
    console.log("DRAW (BOTH BELOW MINIUM)");
    return;
  }

  if (firstTeamAvg > secondTeamAvg) console.log("WINNER IS " + firstTeam.name);
  else if (firstTeamAvg < secondTeamAvg)
    console.log("WINNER IS " + secondTeam.name);
  else console.log("DRAW");
};

// TEST CASE 1
const dolphinsTeamUC1 = {
  name: "Dolphins",
  score: [96, 108, 89],
};

const koalasTeamUC1 = {
  name: "Koalas",
  score: [88, 91, 110],
};

// TEST CASE 2
const dolphinsTeamUC2 = {
  name: "Dolphins",
  score: [97, 112, 101],
};

const koalasTeamUC2 = {
  name: "Koalas",
  score: [109, 95, 123],
};

// TEST CASE 3
const dolphinsTeamUC3 = {
  name: "Dolphins",
  score: [97, 112, 101],
};

const koalasTeamUC3 = {
  name: "Koalas",
  score: [109, 95, 106],
};

handleCheckWinner(dolphinsTeamUC1, koalasTeamUC1, 1);
handleCheckWinner(dolphinsTeamUC2, koalasTeamUC2, 2);
handleCheckWinner(dolphinsTeamUC3, koalasTeamUC3, 3);
