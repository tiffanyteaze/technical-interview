/* 
  Write a function that accepts a String as an argument

  The function should capitalize ONLY  every other letter in the String

  The function should then return the converted String.
*/

function capitalizeRawr(emptyString) {
    emptyString = emptyString.split('');

    let newString = emptyString.map((letter, index) => {
        if (index % 2 === 0) {
            return letter.toUpperCase();
        } else {
            return letter.toLowerCase();
        }
    })
    newString = newString.toString().replaceAll(',','');
    return newString;
}

console.log(capitalizeRawr("hello"));