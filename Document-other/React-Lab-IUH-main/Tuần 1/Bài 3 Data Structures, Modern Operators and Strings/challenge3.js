const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
const tempGameEvents = new Map(gameEvents);
tempGameEvents.delete(64);
console.log(tempGameEvents);

// 3.
const totalMinutes = 90;
const averageEventTime =
  [...gameEvents.keys()].reduce((acc, cur) => acc + cur, 0) / gameEvents;
console.log(`Thời gian trung bình giữa các sự kiện: ${averageEventTime}`);

// 4.
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
}
