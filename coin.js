function coinChanger(N) {
  const coins = [500, 100, 50, 20, 10, 5, 2, 1];
  let used = [];
  let count = 0;

  for (let coin of coins) {
    
    while (coin <= N) {
      used.push(coin);
      N -= coin;
      count++;
    }
  }

  console.log("Coins needed:", count);
  console.log(used.join(","));
}



let numbers = [125, 48, 3];

for (let i = 0; i < numbers.length; i++) {
  coinChanger(numbers[i]);
}