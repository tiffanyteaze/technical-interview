/*
    Write a function that accepts a String as an argument.

    The String is supposed to be HTML, but all the div elements are missing their closing tags (they have the < and >)

    The function's job is to find and close all the divs in the provided HTML String

    The function should return the entire corrected string
*/
let htmlString = `<div>
    <p>This paragraph is in a div.</p>
  <div>`;

const closeSecondDiv = (string) => {
    let divCounter = 0;
    let unknownFour = "";
    let fixedHTML = "";
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "<") {
            for (let j = 1; j < 5; j++) {
                unknownFour += string[i + j];
            }
            // console.log(unknownFour);
        }

        if (unknownFour === "div>") {
            divCounter++;
            if (divCounter % 2 === 0) {
                fixedHTML += string[i] +"/";
                unknownFour = "";
                continue;
            }
        }
    
        fixedHTML += string[i];
        unknownFour = "";
    }
    return fixedHTML;
}

closeSecondDiv(htmlString);

console.log(closeSecondDiv("<div><p>Here is a <div> tag</p>"));
console.log(closeSecondDiv(htmlString));