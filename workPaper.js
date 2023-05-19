function calculateBlankPagesNeeded(n, m) {
    // Return 0 if n or m is less than 0
    if (n < 0 || m < 0) {
      return 0;
    }
    // Calculate the total number of pages needed
    const totalPagesNeeded = n * m;
    // Calculate the number of blank pages needed
    return totalPagesNeeded;
  }
  const numberOfClassmates = 5;
const numberOfPages = 5;
const blankPages = calculateBlankPagesNeeded(numberOfClassmates, numberOfPages);
console.log("Number of blank pages needed:", blankPages);
