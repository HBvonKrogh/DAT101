"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/*
If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
*/
printOut("Task 1, 2 and 3");

const wakeUpTime1 = 6;
const wakeUpTime2 = 7;
const wakeUpTime3 = 8;

const wokeUpAt = 7;


if (wokeUpAt == wakeUpTime1) {
  printOut("I can take the bus to school.");
}
  else if(wokeUpAt == wakeUpTime2) {
  printOut("I can take the bus to school.");
}
  else {
  printOut("I have to drive my car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/*
Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.
*/

let hei = -2;

if(hei > 0) {
  printOut("Value is positive!");
}
  else if(hei < 0) {
    printOut("Value is negative!");
  }
  else {
    printOut("Value is zero!");
  }

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/*
Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".
*/

let randomNumber = Math.floor(Math.random() * 8);
let lowerLimit = 4;
let upperLimit = 6;

if(randomNumber >= 6) {
  printOut("Image is too large!")
}
else if(randomNumber >= 4) {
  printOut("Thank you!")
} 
  else {
    printOut("The image is too small!")
  }


  printOut(randomNumber.toString() + "MP");


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*

*/

const monthList =["January", "February", "Mars", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  if(monthName.includes("r")) {
    printOut("You must take vitamin D")
  }
  else {
    printOut("You do not need to take vitamin D")
  }

  printOut(monthName.toString());
  
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
Expand exercise 8 to print how many days there are in the current month. And do not use date object.
*/

switch(monthName) {
  case "February":
    printOut("28");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    printOut("30");
    break;
  default:
    printOut("31");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.
*/

switch(monthName) {
  case "April":
    printOut("Temporary premises in the building next door.");
    break;
  case "March":
  case "May":
    printOut("Closed.");
    break;
  default:
    printOut("Open!");
}

printOut(newLine);
