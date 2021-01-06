# 21 01 06 JS Higher Order Array Methods Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly
1. Add the following arrays to your JS file
```js
let languages = ["javascript", "c#", "c++", "python", "java"];

let technology = [ {os : `iOS`, product : `iPhone12`}, {os : `iOS`, product : `iPad4`}, {os : `MacOS`, product : `MacBook`}, {os : `Windows`, product : `ThinkPad`}];

let numbers = [2, 4, 6, 8, 10, 12];
```

## Lecture 

### ForEach

1. Output each element in the languages array to the console using a standard for loop.
1. Output each element in the languages array to the console using the foreach array method by passing an anonyms function.
1. Output each element in the languages array to the console using the foreach array method by passing an arrow function.
1. Declare a function `outputLanguage` that accepts an element and an index and outputs the message "Language # INDEX : ELEMENT". Output each element in the languages array to the console using the foreach array method by passing the function `outputLanguage`.

### Reduce

1. Declare a function `addNumbers` that accepts a total and current element and returns the total plus the current element. Call the reduce method on the numbers array, passing in the accumulator and value to the function `addNumbers` as a callback. Output the returned value to the console.
1. Call the reduce method on the numbers array, adding the accumulator and value in an arrow function. Output the returned value to the console.

### Map

1. Call the map method on the numbers array and add 3 to each element in an arrow function. Iterate through the returned array using a foreach.

1. Call the map method on the languages array and return an object with properties `rank` and `language` for each element using an arrow function. Iterate through the returned array using a foreach.

### Filter
1. Call the filter method on the technology array to return elements with an `os` property value of `iOS`. Iterate through the returned array using a foreach.

1. Call the filter method on the languageObject array to return elements with a `rank` property value less than or equal to three.Iterate through the returned array using a foreach to output the "Rank : RANK Language : LANGUAGE"

## Resources

[ForEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
