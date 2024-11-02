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
    console.log(`- Circumference: ${circumference}`);
    console.log(`- Area: ${area}`);
}

// Example usage
rectangleProperties({ width: 10, height: 5 });

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
