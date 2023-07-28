// practice creating variables
let numberOfSeason = 6;
let numberOfEpisode = 12;

let episodeTime = 45;
let commercialTime = 5;
totalShowTime = episodeTime + commercialTime;
//console.log(totalShowTime * numberOfSeason * numberOfEpisode);

// constant

const hoursPerDay = 24;
const minutePerHour = 60;
const secondPerMinute = 60;
//console.log(hoursPerDay, minutePerHour, secondPerMinute);

//Practic using data types
let titleOfEpisode = 'The Bible';
let episodeDurations = 60;
let hadBeenWatched = true;

// creating an object
let episode= {
    title:'The Lord of The Ring',
    duration: 60,
    hasBeenWatchedBefore: true,
};
 // pratic retrieving values from an Object
let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatchedBefore = episode.hasBeenWatchedBefore;
console.log(episodeTitle);

// i don't really understand this 

//creating a class
class Book{
    constructor (title, authot, page){
        this.title = title;
        this.author = author;
        this.page = page;
        let firstBook = newBook ('Toy Story', 'John Doe', 260);
        let secondBook = newBook ('Toy story 2', 'John Doe', 200);
        let thirdBook = newBook ('Toy Stoty 3', 'John Doe', 300);
        

    }
};

let artistProfile = {
    name: 'Tau Perkington',
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // new Array containing the above object

artistProfile.available = false; // changing the object

console.log(allProfiles) // will show { name: 'Tau Perkington', age: 27, available: false }


