function duplicates(nums) {
    const count = {};
    nums.forEach(num => {
      count[num] = (count[num] || 0) + 1;
    });
    const duplicatesCount = Object.keys(count).filter(key => count[key] > 1).length;
    console.log(duplicatesCount);
  }

  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  duplicates(numbers);