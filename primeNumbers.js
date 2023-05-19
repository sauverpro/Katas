function isPrime(number) {
    // Check if number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  const num = 500387023;
const isNumPrime = isPrime(num);
console.log(isNumPrime); // Output: true
