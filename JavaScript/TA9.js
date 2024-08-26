function getOdds(nums) {
  const odds = nums.filter(num => num % 2 !== 0);
  console.log(odds);
  return odds;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(numbers);