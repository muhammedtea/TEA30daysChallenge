let challenge = '30 Days of Javascript';
console.log(challenge);

console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0, challenge.indexOf(' ')));
console.log(challenge.substring(3,21));

let containScript = challenge.includes('Script');

console.log(containScript);

let arrayOfWords = challenge.split(' ');
console.log(arrayOfWords);

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';


let companyArray = company.split (' ');
console.log(companyArray);

let updatedChallenge = challenge.replace('Javascript', 'Python');
console.log(updatedChallenge);

let characterAtIndex15= challenge.charAt(15);
console.log(characterAtIndex15);


let charCodeOfJ = challenge.charCodeAt();
console.log(charCodeOfJ);


let positionA = challenge.indexOf('a');
console.log(positionA);


let lastOccurrenceA = challenge.lastIndexOf('a');
console.log(lastOccurrenceA);


console.log(' "There is no exercise better for the heart than reaching" ');

console.log(' "Love is not patronizing and charity isnt about pity, it is about love. Charity and love are the same -- with charity you give love, so dont just give money but reach out your hand instead." ')



