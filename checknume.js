function numberChecker(numbers) {
    return function(num) {
      return numbers.includes(num);
    };
  }
  const nums = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(nums);

console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
