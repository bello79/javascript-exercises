const reverseString = function(word) {
    const characters = word.split(/(?=.)/);

    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
  
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
