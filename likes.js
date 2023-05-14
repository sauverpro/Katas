function likes(names) {
    // Get the number of people who like the item
    let numLikes = names.length;
  
    // Return the appropriate display text based on the number of likes
    if (numLikes === 0) {
      return "no one likes this";
    } else if (numLikes === 1) {

      return `${names[0]} likes this`;
    } else if (numLikes === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (numLikes === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      let numOthers = numLikes - 2;
      return `${names[0]}, ${names[1]} and ${numOthers} others like this`; // displaying the number of likes
    }
  }
console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"

  