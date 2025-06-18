const factorial = (n) => {
    if (n < 0) return 'Error: Negative numbers are not allowed';
    return n === 0 ? 1 : n * factorial(n - 1);
  };
  
  module.exports = { factorial };

  