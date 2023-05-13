function CreatePhoneNumber(numbers) {
    // check if the input is valid
    if (numbers.length !== 10) {
      return "Invalid input. Please provide an array of 10 integers.";
    }
    // join the numbers into a string and format them as a phone number
    const areaCode = numbers.slice(0, 3).join("");
    const prefix = numbers.slice(3, 6).join("");
    const lineNumber = numbers.slice(6).join("");
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  } //thegym2020!
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
const phoneNumber = CreatePhoneNumber(numbers);
console.log(phoneNumber); 
