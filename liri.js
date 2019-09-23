require("dotenv").config();
var Spotify = require('node-spotify-api')

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");


if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios
    .get(queryUrl)
    .then(function(response){
        console.log(response.data.venue);
        console.log(response.data.venue.city);
    })
}



