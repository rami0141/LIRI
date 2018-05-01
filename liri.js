//dependencies
require("dotenv").config();

// fs is a core Node package for reading and writing files
var fs = require("fs");
var Twitter = require("twitter");
var keys = require('./keys.js')
var request = require("request");
var Spotify = require("node-spotify-api");

var action = process.argv[2];
//var nodeArgs = process.argv[3];
var input = "";


// LOOPING THROUGH ALL THE WORDS IN THE NODE ARGUMENT 
// DO A LOOP TO GET EVERYTHING AFTER THE INDEX OF 2 NODE ARGUMENT
//for (var i = 3; i < nodeArgs.length; i++) {
//	input = input + " " + nodeArgs[i];
//}

// for (var i = 3; i < nodeArgs.length; i++) {
//     if (i > 3 && i < nodeArgs.length) {
//         input = input + "+" + nodeArgs[i];
//     } else {
//         input = input + nodeArgs[i];
//     }
// }

// This will tell which function will run
switch (action) {
	case 'my-tweets':
	showTweets();
	break;

	case `spotify-this-song`:
	showSpotify();
	break;

	case `movie-this`:
	showMovie();
	break;

	case `do-what-it-says`:
	showFs();
	break;

	default:
    console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
  	break;
}

// twitter action 
function showTweets() {
	// Linking API key for Twitter
	var client = new Twitter(keys.twitter);

  	var params = {screen_name: 'crami0141', count: 20};

    console.log("____________MY TWEETS____________");

  	client.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
            console.log("\n" + tweets[i].created_at);
            console.log(tweets[i].text);
            console.log("___________________________");
      } 
  	};
  });
 // This ends the showTweets function	 	
 }
//------------------------------------------------------------------------------------------------

// Spotify action
function showSpotify() {
	// Linking API key for Spotify
	var spotify = new Spotify(keys.spotify);


//create a loop that grabs multiple word titles and makes it into one string..
	for(i=3;i<process.argv.length;i++){
    var song = song + '+' + process.argv[i];
  }
  if(song == undefined){
    console.log()
    
  }

  spotify.search({type: 'track', query: song}, function(err,data){
    if(!err){
      //console log data
      console.log('___________________SPOTIFY___________________');
      console.log('Artist: ' + data.tracks.items[0].artists[0].name);
      console.log('Album Name: ' + data.tracks.items[0].album.name);
      console.log('Song Name: ' + data.tracks.items[0].name);
      console.log('Preview Link: ' + data.tracks.items[0].preview_url);
    }
  })
}

//--------------------------------------------------------------------------------------------
// Movie action
function showMovie() {
	// Grab the movieName
	var nodeArgs = process.argv;
	var movieName = process.argv[3];

//create a loop that grabs multiple word titles and makes it into one string..
// Right now this api only works with single word titles
 //  	for (var i = 3; i < nodeArgs.length; i++) {
 //   	 //if (i > 3 && i < nodeArgs.length) {
 //  	movieName = movieName + "+" + nodeArgs[i];
 // } else {
 //      movieName += nodeArgs[i];
 //    }
 // }
	// Running a request using omdb api
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

	request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // console logging the following info 
    console.log("_________________Movie___________________")
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
    console.log("Country Produced: " + JSON.parse(body).Country);
    console.log("Language: " +  JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});
// This ends the showMovie function	
}

//---------------------------------------------------------------------------------------------------
// // fs

//
function showFs() {
  // reading what is inside random.tx
  fs.readFile('random.txt', "utf8", function(error, data){
    //create code that links puts in a request "I want it that way" in the showSpotify() function
    //console loging the
    console.log("I Want it That Way");

  });
}