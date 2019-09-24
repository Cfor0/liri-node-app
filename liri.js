require("dotenv").config();
var Spotify = require('node-spotify-api')
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");


if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios
    .get(queryUrl)
    .then(function(response){
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(moment(response.data[0].datetime).format('L'))
        
    })
    .catch(function(error){
        if (error.response) {
            console.log(error.response.data);
        }
    })
}



