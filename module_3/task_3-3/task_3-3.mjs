"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".
*/

function printNorwegianDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    printOut(today.toLocaleDateString('no-NB', options));
}

printNorwegianDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output
*/

function getTodayDateInNorwegian() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('no-NB', options);
    printOut(`📅 Dagens dato: ${formattedDate}`);
    return today;
}

function daysUntil2XKORelease() {
    const releaseDate = new Date('2025-05-14');
    const today = getTodayDateInNorwegian();

    const diffInTime = releaseDate - today;
    const daysLeft = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
        printOut(`🔥 Kun ${daysLeft} dager igjen til 2XKO-slippet! Gjør deg klar for kampene! 🥊`);
    } else if (daysLeft === 0) {
        PrintOut(`🎉 I DAG er den store dagen! 2XKO lanseres nå! La kampene begynne! 🥳`);
    } else {
        printOut(`🚀 2XKO ble lansert for ${Math.abs(daysLeft)} dager siden. Har du allerede kjempet?`);
    }
}

daysUntil2XKORelease();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Create a function that receives the radius of a circle and prints the diameter, circumference, and area.
*/
function circleProperties(radius) {
    if (radius <= 0) {
        printOut("Radius must be a positive number.");
        return;
    }
    
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut(`For a circle with radius ${radius}:`);
    printOut(`- Diameter: ${diameter.toFixed(2)}`);
    printOut(`- Circumference: ${circumference.toFixed(2)}`);
    printOut(`- Area: ${area.toFixed(2)}`);
}

circleProperties(1337);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.
*/
function rectangleProperties(dimensions) {
    const { width, height } = dimensions;
    
    if (width <= 0 || height <= 0) {
        printOut("Width and height must be positive numbers.");
        return;
    }
    
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut(`For a rectangle with width ${width} and height ${height}:`);
    printOut(`- Circumference: ${circumference}`);
    printOut(`- Area: ${area}`);
}

rectangleProperties({ width: 10, height: 5 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. 
*/

function convertTemperature(value, unit) {
    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {

        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
        printOut(`Celsius: ${Math.floor(value)}, Fahrenheit: ${Math.floor(fahrenheit)}, Kelvin: ${Math.floor(kelvin)}`);
    } else if (unit === "Fahrenheit") {

        celsius = (value - 32) * 5 / 9;
        kelvin = (value - 32) * 5 / 9 + 273.15;
        printOut(`Fahrenheit: ${Math.floor(value)}, Celsius: ${Math.floor(celsius)}, Kelvin: ${Math.floor(kelvin)}`);
    } else if (unit === "Kelvin") {

        celsius = value - 273.15;
        fahrenheit = (value - 273.15) * 9 / 5 + 32;
        printOut(`Kelvin: ${Math.floor(value)}, Celsius: ${Math.floor(celsius)}, Fahrenheit: ${Math.floor(fahrenheit)}`);
    } else {
        printOut("Unknown temperature unit");
    }
}


convertTemperature(0, "Celsius");
convertTemperature(32, "Fahrenheit");
convertTemperature(273.15, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100)
*/

function calculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
  
    printOut("taxGroup = " + taxGroup);
  
    switch (taxGroup) {
      case "NORMAL":
        vat = 25;
    }
  
    if (!Number.isNaN(vat)) {
      net = (100 * aPrice) / (vat + 100);
    }
  
    return net;
  }
  
  const netPrice1 = calculateNetPrice(100, "normal");
  if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
  }
  
  const netPrice2 = calculateNetPrice(100, "goblins");
  if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
  } else {
    printOut("netPrice2 = " + netPrice2.toFixed(2));
  }


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.
*/

  

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.
*/


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
From mathematics, we have the following expression:

                1 + 2 = 3
            4 + 5 + 6 = 7 + 8
        9 + 10 + 11 + 12 = 13 + 14 + 15
    16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35

Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!".
*/
function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    // Left side
    let ok = false;
    do {
      let sumLeft = 0;
      for (let left = 0; left < line + 1; left++) {
        sumLeft += op;
        op++;
      }
  
      let sumRight = 0;
      for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
      }
  
      if (sumLeft !== sumRight) {
        ok = false;
        printOut("Error in line " + line.toString());
      }else{
        ok = true;
      }
      line++;
  
      if(line > 200){
        printOut("Math is Fun!");
        break;
      }
      
    } while (ok);
  }
  
  testIfMathIsFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*
Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.
*/


printOut("Replace this with you answer!");
printOut(newLine);
