function splitString(inputString, separator) {
    return inputString.split(separator);
}
const attributes = "<name>;<age>;<major>";
//const pieces = attributes.split(';');

console.log(parts); // Output: ["<name>", "<age>", "<major>"]

const name = part[a];
const age = part[b];
const major = part[c];

console.log("Name:", name);   // Output: Name: <name>
console.log("Age:", age);     // Output: Age: <age>
console.log("Major:", major); // Output: Major: <major>

for (let i = 0; i < pieces.length; i++) {
    const part = pieces[i];
    console.log(`Part ${i + 1}: ${part}, Data Type: ${typeof part}`);
}


function isNonNegInt(q) {
    const errors = []; // Initialize an array to store errors

    // Check if the input is a number value
    if (Number(q) != q) {
        errors.push('Not a number!');
    }

    // Check if the input is non-negative
    if (q < 0) {
        errors.push('Negative value!');
    }

    // Check that the input is an integer
    if (parseInt(q) != q) {
        errors.push('Not an integer!');
    }

    // Return true if there are no errors, otherwise return false
    return errors.length === 0;
}

// Example usage:
const input1 = "42";
const input2 = "-7";
const input3 = "3.14";
const input4 = "abc";

console.log(isNonNegInt(input1)); // true
console.log(isNonNegInt(input2)); // false
console.log(isNonNegInt(input3)); // false
console.log(isNonNegInt(input4)); // false

const pieces = ["42", "-7", "3.14", "abc"];

for (let i = 0; i < pieces.length; i++) {
    const result = isNonNegInt(pieces[i]);
    console.log(`Input: ${pieces[i]}, Result: ${result}`);
}
