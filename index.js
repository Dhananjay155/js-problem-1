function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 4)); 
function checkValue(value) {
    if (value === null) {
        return "Value is null.";
    } else if (value === undefined) {
        return "Value is undefined.";
    } else {
        return "Value is valid.";
    }
}

console.log(checkValue(null)); 
function generateEmail(name, domain) {
    let emailName = name.toLowerCase().replace(/\s+/g, '.');
    return `${emailName}@${domain}`;
}

console.log(generateEmail("John Doe", "example.com")); 
function checkType(param) {
    if (Array.isArray(param)) {
        return "Type: Array";
    } else if (param === null) {
        return "Type: Null";
    } else {
        return `Type: ${typeof param}`;
    }
}

console.log(checkType([1, 2, 3])); 
function composeMessage(name, age, city) {
    return `Hello ${name}, you are ${age} years old and live in ${city}.`;
}

console.log(composeMessage("John", 25, "New York")); 