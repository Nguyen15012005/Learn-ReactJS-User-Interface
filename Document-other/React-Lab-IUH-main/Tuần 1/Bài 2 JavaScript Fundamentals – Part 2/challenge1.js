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

  if (firstTeamAvg >= 2 * secondTeamAvg)
    console.log("WINNER IS " + firstTeam.name);
  else if (2 * firstTeamAvg <= secondTeamAvg)
    console.log("WINNER IS " + secondTeam.name);
  else console.log("NO TEAM WINS  ");
};

// TEST CASE 1
const dolphinsTeamUC1 = {
  name: "Dolphins",
  score: [44, 23, 71],
};

const koalasTeamUC1 = {
  name: "Koalas",
  score: [65, 54, 49],
};

// TEST CASE 2
const dolphinsTeamUC2 = {
  name: "Dolphins",
  score: [85, 54, 41],
};

const koalasTeamUC2 = {
  name: "Koalas",
  score: [23, 34, 27],
};

handleCheckWinner(dolphinsTeamUC1, koalasTeamUC1, 1);
handleCheckWinner(dolphinsTeamUC2, koalasTeamUC2, 2);
