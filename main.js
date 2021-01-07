// console.log(`21 01 06 JS Higher Order Array Methods Lecture`);

// arrays
let languages = ["javascript", "c#", "c++", "python", "java"];
// let technology = [ {os : `iOS`, product : `iPhone12`}, {os : `iOS`, product : `iPad4`}, {os : `MacOS`, product : `MacBook`}, {os : `Windows`, product : `ThinkPad`}];
let numbers = [2, 4, 6, 8, 10, 12];

// Output each element in the languages array to the console using a standard for loop.
for(let i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

// Output each element in the languages array to the console using the foreach array method by passing an anonyms function.
languages.forEach(
    function (lang) {
        console.log(lang);
    }
)

// Output each element in the languages array to the console using the foreach array method by passing an arrow function.
languages.forEach(lang => console.log(lang));

// Declare a function outputLanguage that accepts an element and an index and outputs the message "Language # INDEX : ELEMENT". Output each element in the languages array to the console using the foreach array method by passing the function outputLanguage.
function outputLanguage(lang, indexPosition){
    console.log(`Language #${indexPosition} : ${lang}`);
}
languages.forEach((lang, indexPosition) => outputLanguage(lang, indexPosition));

// move the functionality of outputLanguage into the arrow function
languages.forEach((lang, indexPosition) => {
    console.log(`Language #${indexPosition} : ${lang}`);
});

// Declare a function addNumbers that accepts a total and current element and returns the total plus the current element. Call the reduce method on the numbers array, passing in the accumulator and value to the function addNumbers as a callback. Output the returned value to the console.
function addNumbers(total, currentValue){
    return total + currentValue;
}
let numbersTotal = numbers.reduce((runningTotal, currentElement) => addNumbers(runningTotal, currentElement));
console.log(numbersTotal);

// Call the reduce method on the numbers array, adding the accumulator and value in an arrow function. Output the returned value to the console.
let sum = numbers.reduce((total, currentNum) => total + currentNum);
console.log(sum);

// Call the map method on the numbers array and add 3 to each element in an arrow function. Iterate through the returned array using a foreach.
numbers.forEach(num => console.log(num));
let updatedNumbers = numbers.map(num => num + 3);
updatedNumbers.forEach(num => console.log(num));

// // Call the map method on the languages array and return an object with properties rank and language for each element using an arrow function. Iterate through the returned array using a foreach.
let languageObjects = languages.map((lang, index) => {
    return {
        rank : index,
        language : lang
    }
});
languageObjects.forEach(lang => console.log(lang));

// Call the filter method on the technology array to return elements with an os property value of iOS. Iterate through the returned array using a foreach.

let technology = [ {os : `iOS`, product : `iPhone12`}, {os : `iOS`, product : `iPad4`}, {os : `MacOS`, product : `MacBook`}, {os : `Windows`, product : `ThinkPad`}];

let iosTech = technology.filter(tech => tech.os == "iOS");

iosTech.forEach(tech => console.log(tech));

// Call the filter method on the languageObject array to return elements with a rank property value less than or equal to three.Iterate through the returned array using a foreach to output the "Rank : RANK Language : LANGUAGE"
let highRanking = languageObjects.filter(lang => lang.rank <= 3);
highRanking.forEach(lang => console.log(`Rank : ${lang.rank} Language : ${lang.language}`));