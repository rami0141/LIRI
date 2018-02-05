require("dotenv").config();

// fs is a core Node package for reading and writing files
var fs = require("fs");
var twitter = require("twitter");
var request = require("request");
var spotify = require("node-spotify-api");


//keeping credentials private
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});