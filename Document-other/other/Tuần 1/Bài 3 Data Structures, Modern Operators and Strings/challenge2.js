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

// 1
const gameScored = [...game.scored];
gameScored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2
const gameOdds = { ...game.odds };
const odds = Object.values(gameOdds);
const avgOdds = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Trung bình tỷ lệ cược ${avgOdds}`);

// 3
const teamNames = Object.keys(gameOdds);
const teamOdds = Object.values(gameOdds);
teamNames.forEach((teamName, index) => {
  console.log(
    `Team ${teamName === "x" ? "draw" : teamName} has an odd of ${
      teamOdds[index]
    } to win the game.`
  );
});

// 4
const scorers = {};
game.scored.forEach((player) => {
  scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);
