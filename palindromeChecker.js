function isPalindrome(x) {
    // Remove non-alphanumeric characters and convert to lowercase
    const formattedStr = x.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    // Reverse the string
    const reversedStr = formattedStr.split('').reverse().join('');
  
    // Check if the reversed string matches the original formatted string
    return formattedStr === reversedStr;
  }
  const string1 = "Madam";
console.log(isPalindrome(string1)); // Output: true
