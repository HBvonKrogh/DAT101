"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
*/
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
let text = "";

for (let countNumber = 0; countNumber < numbers.length; countNumber++) {
  text += numbers[countNumber];
  if (countNumber < numbers.length - 1) {
    text += ", ";
  }
}
printOut(text);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
*/
let customSeparator = " - ";
let joinedNumbers = numbers.join(customSeparator);
printOut(joinedNumbers);


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.
*/

const textPart3 = "Hei på deg, hvordan har du det?";
const words = textPart3.split(" ");
for (let index = 0; index < words.length; index++) {
  const word = words[index];
  printOut(index + ": " + word);
}


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array
*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray(aArray, aItem) {
  const result = aArray.indexOf(aItem);
  if (result > -1) {
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(result, 1);
  } else {
    printOut("Can not remove " + " " + aItem + " from array");
  }
}

function findAndRemoveFromArray(aArray, aItem) {
  let index = -1;
  const result = aArray.find(findName);
  if (result) {
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(index, 1);
  } else {
    printOut("Can not remove " + " " + aItem + " from array");
  }
  function findName(aName, aIndex) {
    index = aIndex;
    return aName === aItem;
  }
}
removeFromArray(girls, "Nina");
findAndRemoveFromArray(girls, "Arne");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const names = girls.concat(boys);
names.forEach(printName);
function printName(aName) {
  printOut(aName);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list.
*/

class TBook {
  #Title;
  #Author;
  #ISBN;
  constructor(aTitle, aAuthor, aISBN) {
    this.#Title = aTitle;
    this.#Author = aAuthor;
    this.#ISBN = aISBN;
  }

  toString() {
    return this.#Title + ", " + this.#Author + ", " + this.#ISBN;
  }
}
const books = [new TBook("The Hobbit", "J.R.R. Tolkien", "978-0-395-07122-1"), new TBook("The Shining", "Stephen King", "978-0-385-12167-5"), new TBook("The Da Vinci Code", "Dan Brown", "978-0-385-50420-5")];

books.forEach(printBook);
function printBook(aBook) {
  printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
You can replace the language in the "name" attributes with whatever you want.
Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the
EWeekDays object.
Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
*/

const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays); //Dette gir oss alle nøklene i objektet EWeekDays
printOut("Keys: " + keys.join(", ")); // Her printer vi ut alle nøklene i objektet EWeekDays
const values = Object.values(EWeekDays); // Dette gir oss all verdiene i objektet EWeekDays
printOut("Values: " + values.join(", ")); // Her printer vi ut alle  verdiene i objektet EWeekDays
let valueKeys = Object.values(EWeekDays[keys[0]]); // Her ser vi på verdien til nøkkelen Workdays (7)
printOut("ValueKeys: " + valueKeys.join(", ")); // Her printer vi ut verdien til nøkkelen Workdays (7)

// Vi går igjennom alle nøklene til objektet EWeekDays
for (let index = 0; index < keys.length; index++) {
  let text = "";
  // Vi henter ut navnet på nøkkelen
  const key = keys[index];
  text = key + ": ";
  printOut(key);
  const keyObject = EWeekDays[key]; // Henter vi objektet til nøkkelen (f.eks. WeekDay1)
  const keyObjectKeys = Object.keys(keyObject); // Her henter vi alle nøklene til for eksempel WeekDay1
  for (let i = 0; i < keyObjectKeys.length; i++) {
    const keyObjectKey = keyObjectKeys[i]; // Her henter vi ut nøkkelen (f.eks. value)
    const keyObjectValue = keyObject[keyObjectKey]; // Her henter vi ut verdien til nøkkelen (f.eks. 0x01)
    text += " " + keyObjectKey + ": " + keyObjectValue;
  }
  printOut(text);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*
Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.
*/
const randomNumbers = [];
for (let i = 0; i < 35; i++) {
  const randomNumber = Math.ceil(Math.random() * 20);
  randomNumbers.push(randomNumber);
}
printOut("Random numbers: " + randomNumbers.join());

randomNumbers.sort(sortRandomNumbers);
printOut("Tabellen i stigende rekkefølge: " + randomNumbers.join(", "));
randomNumbers.reverse();
printOut("Tabellen i synkende rekkefølge: " + randomNumbers.join(", "));

function sortRandomNumbers(aNumber1, aNumber2) {
  return aNumber1 - aNumber2;
}
/*
Pilfunksjoner: ((argumenter)=>{body})
Ikke navngitte funksjoner: function(argumenter){body}
vanlige navngitte funksjoner: function navn(argumenter){body}
*/
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number.
*/
const freq = {};
for(let i = 0; i < randomNumbers.length; i++){
  const value = randomNumbers[i];
  if(freq[value]){
    freq [value]++;
  }else{
    freq[value] = 1;
  }
}

let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);


function sortFreq(aValue1, aValue2){
  const freq1 = freq[aValue1];
  const freq2 = freq[aValue2];
  return freq2 - freq1;
}


text = "";
for(let i = 0; i < freqKeys.length; i++){
  const freqKey = freqKeys[i];
  const freqValue = freq[freqKey];
  text += freqKey + ": " + freqValue + ", ";
}
printOut(text);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*
Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
*/
const myTable = [];
for(let row = 0; row < 5; row++){
  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell = + row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}
text = "";
for(let row = 0; row < myTable.length; row++){
  const columns = myTable[row];
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column];
    text += "[" + cell + "]";
  }
  printOut(text);
  text = "";
}

printOut(newLine);
