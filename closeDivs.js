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
    console.log(string)
}

closeSecondDiv("hello");