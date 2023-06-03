console.log("hello world");
// TODOs: Make a Voting app for goat

//TODO: global variables for elements

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

//TODO: put voting and results area into HTML

//TODO: Global variables for state
// . for example goat objects
// .                  goat votes

// Goat Constructor

function Goat(name, imgSrc) {
  this.name = this.name; // image
  this.imgSrc = this.imgSrc; // a name
  this.voteCount = 0; //vote count
  this.viewCount = 0; // view count
}

//Declaring variables
let cruisinGoat = new Goat("CruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");

let goat1Img = document.getElementById("goat1");
let goat2Img = document.getElementById("goat2");

// Global
let goatArray = [];
goatArray.push(cruisinGoat);
goatArray.push(floatGoat);

console.log(goatArray);

//TODO: Voting Machine DOM

//input: goat objects
//it takes in goat objects and puts them into the dom
function setGoatImages(goat1, goat2) {
  goat1Img.src = goat1.imgSrc;
  goat1Img.alt = goat1.name;
  goat1Img.title = goat1.name;
  goat2Img.src = goat2.imgSrc;
  goat2Img.alt = goat2.name;
  goat2Img.title = goat2.name;
}
//TODO: Voting machine JS

// goat1Img.src = goatArray[0].imgSrc;
// goat2Img.src = goatArray[1].imgSrc;

function(cruisinGoat, floatGoat);