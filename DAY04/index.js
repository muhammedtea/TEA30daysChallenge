let userInput = prompt("Enter your age:");

let userAge = parseInt(userInput);

if (userAge >= 18) {
    console.log("You are old enough to drive.");
  } else {
    let yearsToWait = 18 - userAge;
    console.log("You are not yet 18. Please wait for " + yearsToWait + " year(s) to drive.");
  }

  let yourAgeInput = prompt("Enter your age:");

  let yourAge = parseInt(yourAgeInput);

  let myAge = 25;

  if (yourAge > myAge) {
    console.log("You are older than me.");
  } else if (yourAge < myAge) {
    console.log("I am older than you.");
  } else {
    console.log("We are of the same age.");
  }


  let numberToCheck = 14;

  if (numberToCheck % 2 === 0) {
    console.log(numberToCheck + " is an even number.");
  } else {
    console.log(numberToCheck + " is an odd number.");
  }


  let studentScore = 85;

  let grade;

if (studentScore >= 80 && studentScore <= 100) {
  grade = "A";
} else if (studentScore >= 70 && studentScore < 80) {
  grade = "B";
} else if (studentScore >= 60 && studentScore < 70) {
  grade = "C";
} else if (studentScore >= 50 && studentScore < 60) {
  grade = "D";
} else if (studentScore >= 0 && studentScore < 50) {
  grade = "F";
} else {
    grade = "Invalid score";

}

console.log("The students grade is:", studentScore + "Grade");