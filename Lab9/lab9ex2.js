function splitString(inputString, separator) {
    return inputString.split(separator);
}
const attributes = "<name>;<age>;<major>";
const pieces = attributes.split(';');

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