
let name = 'Mosh';  // string
console.log(name); 

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);   
// example of primative 
let age = 30; // number 
let isApproved = true; // Boolean can be true or false, they are reserved key word and can't be variable name 
let firstName = undefined; // if we don't intiallize it
let lastName = null;

// how to delcare a variable

let numberOfCats = 2;
let numberOfDog = 4;

// practice creating variables
 let numberOfSeasons = 6;
 let numberOfEpisodes = 12;
 console.log(numberOfEpisodes, numberOfSeasons);

 // How to change avalue of a variable
 //  we declare the variable numberOfCats and initialize it with the value 3. We then reassign it the value 4 (without the let keyword, as the variable has already been declared)
 
 let numberOfDogs = 3;
 numberOfDogs = 4;
 console.log(numberOfDogs); // the result will display 4 and not 3 becasue we have change the value of the variable 

 // Arithmetic operators

 let totalCDs = 60;
 let totalVinyls = 40;

 //totalCDs = totalCDs + 4; //if we want to add more value to the variable, but a cumbersome way of writting.
 //totalCDs += 1;
 //totalVinyls-=1;
 totalCDs++; // this is the same as saying plus equals one, this how we add one to a variable
 totalVinyls--; // this how we subtract one from the variable 

 let totalMusic = totalCDs + totalVinyls; // to calculate the total music
 console.log(totalMusic);

// mutipllication and division
let costPerProducts = 20;
let numberOfProducts = 5;

let totalCost = costPerProducts * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

//another way to multiply
let numberOfFood = 2;
numberOfFood *= 4;
console.log(numberOfFood);

// another way for division
let numberOfCups = 15;
numberOfCups /= 5;
console.log(numberOfCups);

//constantssome pieces of data will not be modified at any point while the program is running. 
//For example, a company's name, a user's date of birth, or the number of hours in a day. 
//To help make sure you don't accidentally reassign new values to these important pieces of data, you use constants.

const hoursPerDays = 24;
console.log (hoursPerDays);

// creating an Object
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};


// Array.
let guests = ['Sarah Kate', 'Audrey Simon', 'Will Alexander'];
console.log(guests[1]);

//You can then access elements of that array by their index:
let firstGuest = guests[0]; // 'Sarah Kate'
let thirdGuest = guests[2]; // 'Will Alexander'
let undefinedGuest = guests[12] // undefined

// Classwork
let episode = ['firstEpisode','secondEpisode','thirdEpisode'];
console.log(episode[2]);

//value vs reference
let numberOfGuest = 5;
let ticketsRemaining = false;
let artistName = 'John Smith';
let guest = ['mike','Andy','kate'];

// creating an object
let artistProfile = {
    numberOfGuest: numberOfGuest,
    ticketsRemaining: ticketsRemaining, 
    artistName: artistName,
    guest: guest
};
// to make a change to the guest array.
guest.push('Nnenna');
console.log(artistProfile);
//let artistArray = [artistProfile];
  // let artistArray = [numberOfGuest, ticketsRemaining, artistName];
   //console.log(artistArray);
  // console.log(artistProfile); 

   // to modify a value you will need to use dot
  // artistProfile.ticketsRemaining = true;
  // console.log(artistArray);

  //The length property of an array tells you how many elements there are in it:

  let guests = ['Will Alexander', 'Sarah Kate', 'Audrey Simon'];
  let howManyGuests = guests.length; // 3
  //Adding and removing elements To add an element to the end of an array, use its  push method:
  guests.push('Tau Perkington'); // adds 'Tau Perkington' to the end of our guests array
  //You use dot notation to access the array's  push method and put the element you wish to add in parentheses.

  //If you want to add your element at the beginning of the array instead of the end, use the  unshift  method:
  guests.unshift('Tau Perkington'); // 'Tau Perkington' is added at the beginning of the guests array

  //To remove the last element of an array, call itspop method, without passing any arguments:
  guests.pop(); // removes the last element from the array



   
   
   