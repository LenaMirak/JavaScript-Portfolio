const recursiveSum = (n) => {
    if (n <= 0) return 0; // Base case
    return n + recursiveSum(n - 1); // Recursive call
  };
  
  module.exports = { recursiveSum };
  