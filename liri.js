//dependencies
require("dotenv").config();

// fs is a core Node package for reading and writing files
var fs = require("fs");
var keys = require('./keys.js')
var twitter = require("twitter");
var request = require("request");
var spotify = require("node-spotify-api");

// Take two arguments.
var action = process.argv[2];
var nodeArgs = process.argv
var input = "";

// LOOPS THROUGH ALL THE WORDS IN THE NODE ARGUMENT 
// DO A LOOP TO GET EVERYTHING AFTER THE INDEX OF 2 NODE ARGUMENT
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        input = input + "+" + nodeArgs[i];
    } else {
        input = input+ nodeArgs[i];
    }
}


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

}

// Spotify action

function showSpotify() {
}

// Movie action
function showMovie() {

}

// fs
function showFs() {

}