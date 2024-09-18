"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* 
Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
*/

const result = 2 + (3 * (2 - 4)) * 6;
const result2 = "2 + (3 * (2 - 4)) * 6";

printOut("result 2 + 3 * 2 - 4 * 6: " + result.toString());
printOut(result2 + " = " + eval(result2).toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters.
*/
/*
    (25.4 / 1000) * 25.34m
*/

const millInInch = 25.4;
const millInMeters = 1000;
const meters = 25.34;
const answer = (meters * millInMeters) / millInInch;
const exactAnswer = answer.toFixed(2);

printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes.
*/

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_Answer = ((hoursInDay * 3) * minutesInHour) + (minutesInHour * 12) + (45 / secondsInMinute) + 14;

printOut("part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/

const numberOfMinutes = 6322.52;
let part4_Calc = (numberOfMinutes / 60) / 24;
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + " dollar is " + amountNOK + " kroner ");
amountUSD = Math.round(amountNOK * USD);
printOut(amountNOK + " kroner is " + amountUSD + " dollars");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
*/

let text = "There is much between heaven and earth that we do not understand.";
let length = text.length;
printOut("Text length = " + text.length);

printOut("Character number 19 is: " + text.charAt(19));

printOut("Character number 35 and 8 characters forward is: " + text.substr(35, 8));

printOut("Print the index at which earth starts in the text: " + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 
Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/

let nr1 = (5>3);
Boolean (nr1);
printOut("Is 5 greater than 3? " + Boolean(nr1));

let nr2 = (7>=7);
Boolean(nr2);
printOut("Is 7 greater or equal to 7? " + Boolean(nr2));

let nr3 = ("a" > "b");  
Boolean(nr3);
printOut("Is a greater than b? " + Boolean(nr3));

let nr4 = ("1" < "a");
Boolean(nr4);
printOut("Is 1 less than a? " + Boolean(nr4));

let nr5 = ("2500" < "abcd");
Boolean(nr5);
printOut("Is 2500 less than abcd? " + Boolean(nr5));

let nr6 = ("arne" != "thomas");
Boolean(nr6);
printOut("arne is not equal to thomas " + Boolean(nr6));

printOut("(2 equals 5) is this statement true? " + ((2 === 5) === true).toString());

printOut("(abcd is greater than bcd) is this statement false? " + (("abcd" > "bcd") === false).toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*
Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/

printOut("Convert from text '254' to a number: " + Number("254"));

printOut("Convert from text '57.23' to a number: " + Number("57.23"));

printOut("Convert from text '25 kroner' to a number: " + parseInt("25 kroner").toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/

let r = Math.floor(Math.random() * 361)

printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*
Use modulus (%) to calculate how many weeks and days are in 131 days.
*/


let dager = 131;
let uker = (131 / 7);

const uker1 = Math.floor(uker);

const daysInWeeks = 7;

let x = dager % 7;

printOut("Weeks: "+ uker1 + " Days: "+ x.toString());
printOut(newLine);