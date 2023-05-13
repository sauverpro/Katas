function spinWords(string) {
    // Split the string into an array of words
    let words = string.split(" ");
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Check if the word has five or more letters
      if ( words[i].length >= 5) {
        // Reverse the word
        words[i] = words[i].split("").reverse().join("");
      }
    }
    // Join the array of words back into a string and return it
    return words.join(" ");
  }
  let str = "Seriously this is the laste one";
let result = spinWords(str);
console.log(result); // "sihT is a tset gnirts"
