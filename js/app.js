// TODOs: Make a Voting app for goat

//TODO: global variables for elements

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

//TODO: put voting and results area into HTML

//TODO: Global variables for state
// . for example goat objects
// .                  goat votes

// Goat Constructor

function Goat() {
  //Got has
  //    an image
  //.   a name
  //. vote count
  //. view count
  this.name = this.name; // image
  this.imgSrc = imgSrc; // a name
  this.voteCount = 0; //vote count
  this.viewCount = 0; // view count
}

let cruisinGoat = new Goat("CruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");

// Global
let goatArray = [];

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);

//TODO: Voting Machine DOM
