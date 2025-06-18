const secondLargest = (arr) => {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
  };
  
  module.exports = { secondLargest };
  