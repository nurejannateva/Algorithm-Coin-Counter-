let activities = [
  { start: 1, finish: 3, index: 1 },
  { start: 2, finish: 4, index: 2 },
  { start: 3, finish: 5, index: 3 },
  { start: 0, finish: 6, index: 4 },
  { start: 5, finish: 7, index: 5 },
  { start: 8, finish: 9, index: 6 },
];


activities.sort((a, b) => a.finish - b.finish);

let selected = [];
let lastFinish = -1;

for (let i = 0; i < activities.length; i++) {
  if (activities[i].start >= lastFinish) {
    selected.push(activities[i]);
    lastFinish = activities[i].finish;
  }
}

console.log("Maximum activities:", selected.length);

console.log("Selected (index):");
for (let a of selected) {
  console.log(a.index);
}

console.log("Selected (time):");
for (let a of selected) {
  console.log("[" + a.start + "-" + a.finish + "]");
}