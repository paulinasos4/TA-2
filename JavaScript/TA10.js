function getSum(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    console.log(sum);
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  getSum(numbers);