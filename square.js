function isSquareNumber(number) {
    // If the number is negative, it cannot be a square number
    if (number < 0) {
      return false;
    }
    // Calculate the square root of the number
    const sqrt = Math.sqrt(number);
    // If the square root is an integer, the number is a square number
    return Number.isInteger(sqrt);
  }
  