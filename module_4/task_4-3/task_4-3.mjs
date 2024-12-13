"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/*
Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.
*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
  const perimeter = (height + width) * 2;
  const area = height * width;
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets = " + perimeter + " Areal = " + area;

  /*
  console.log("Omkrets: " + perimeter + " Areal: " + area);
  console.log("Width " + width + " Height " + height);
  console.log("Height er av typen: " + typeof height);
  console.log("Width er av typen: " + typeof width);
  */
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/*Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return"
Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2KeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");
function txtTask2KeyPress(aEvent) {
  const key = aEvent.key;
  switch (key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/*Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output.*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
    for(let i = 0; i < chkTask3.length; i++){
      const checkBox = chkTask3[i];
      if(checkBox.checked){
        const value = checkBox.value;
      text += "Du har valgt nummer " + value + ". <br />";
      }
    }
    txtTask3Output.innerHTML = text;
    text = "";
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/*Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/

const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");
txtTask4Output.innerHTML = "Du har valgt: ";
function radTask4CarsChange() {
  const radTask4Cars = document.getElementsByName("radTask4Cars");
  for (let i = 0; i < radTask4Cars.length; i++) {
    const radio = radTask4Cars[i];
    if (radio.checked) {
      txtTask4Output.innerHTML = "Du har valgt: " + radio.value;
    }
  }
}

for (let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i];
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "radTask4Cars";
  radio.value = car.caption;
  radio.addEventListener("change", radTask4CarsChange);
  divTask4Cars.appendChild(radio);
  const label = document.createElement("label");
  label.innerHTML = car.caption;
  divTask4Cars.appendChild(label);
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/*Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
const txtTask5Output = document.getElementById("txtTask5Output");
function selectTask5AnimalsChange() {
  txtTask5Output.innerHTML = "Du har valgt: " + selectTask5Animals.value;
}

//--- Part 6 ----------------------------------------------------------------------------------------------
/*Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output.*/

const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
for (let i = 0; i < GirlsNames.length
  ; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.innerHTML = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}
function selectTask6GirlsChange() {
  txtTask6Output.innerHTML = "Du har valgt: " + selectTask6Girls.value;
}
selectTask6Girls.addEventListener("change", selectTask6GirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/*Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/

const cmbAddMovie = document.getElementById("cmbAddMovie");
cmbAddMovie.addEventListener("click", cmbAddMovieClick);
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const tblMovies = document.getElementById("tblMovies");
function cmbAddMovieClick() {
  const row = tblMovies.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.innerHTML = txtMovieTitle.value;
  cell2.innerHTML = txtMovieDirector.value;
  cell3.innerHTML = selectMovieGenre.value;
  cell4.innerHTML = txtMovieRate.value;
}
for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.innerHTML = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}
function selectMovieGenreChange() {
  txtTask6Output.innerHTML = "Du har valgt: " + selectMovieGenre.value;
}
selectMovieGenre.addEventListener("change", selectMovieGenreChange);
