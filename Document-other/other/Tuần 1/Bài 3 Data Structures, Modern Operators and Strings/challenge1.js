const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// 1
console.log("Thành viên đội 1: ", players1);
console.log("Thành viên đội 2: ", players2);

// 2
const gk = players1[0];
const fieldPlayers = players1.slice(1);

console.log("Thủ môn đội 1: ", gk);
console.log("Số thành viên còn lại đội 1: ", fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log("Thành viên của 2 đội là: ", allPlayers);

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
const printGoals = (...players) => {
  console.log(
    `${players.join(", ")} ghi tổng cộng ${players.length} bàn thắng`
  );
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// 7
let result = {
  message: "Team 1 win",
  rate: team1,
};
if (team2 < result.rate) {
  result.message = "Team 2 win";
  result.rate = team2;
}
if (draw < result.rate) {
  result.message = "Draw";
  result.rate = draw;
}

console.log(result);
