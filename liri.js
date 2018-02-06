//dependencies
require("dotenv").config();

// fs is a core Node package for reading and writing files
var fs = require("fs");
var Twitter = require("twitter");
var keys = require('./keys.js')
var request = require("request");
var Spotify = require("node-spotify-api");

var action = process.argv[2];
var nodeArgs = process.argv[3];
var input = "";

console.log(nodeArgs);
console.log(action);

// LOOPS THROUGH ALL THE WORDS IN THE NODE ARGUMENT 
// DO A LOOP TO GET EVERYTHING AFTER THE INDEX OF 2 NODE ARGUMENT
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

// twitter action  -- figure out later

function showTweets() {
	//validatiom
	var T = new Twitter(keys.twitter);

  	var params = {screen_name: 'crami0141', count: 10};

  	T.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
            console.log(tweets[i].text);
      } 
  	};
  });
 }


// Spotify action
// validatiom
//	var S = new Spotify(keys.switter);
//function showSpotify() {
// }

// // Movie action
// function showMovie() {

// }

// // fs
// function showFs() {

// }