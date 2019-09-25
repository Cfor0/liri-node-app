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
        .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(moment(response.data[0].datetime).format('L'))

        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        })
} else if (process.argv[2] === "spotify-this-song") {
    var songName = process.argv[3];
    var spotify = new Spotify({
        id: "b00c5a1a3a9241d6a3a98ce9e172d878",
        secret: "666b69bc26b84fb3aab7ac4af56000d8"
    });
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        console.log("Artist: ", data.tracks.items[0].artists[0].name);
        console.log("Songs name: ", data.tracks.items[0].name);
        console.log("Preview link: ", data.tracks.items[0].preview_url);
        console.log("Album: ", data.tracks.items[0].album.name);


    })
} else if (process.argv[2] === "movie-this") {
    var movieName = process.argv[3];
    axios
        .get("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy&")
        .then(function (response) {
            console.log(response.data.Title);
            console.log(response.data.Released);
            console.log(response.data.Ratings[0]);
            console.log(response.data.Ratings[1]);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
        })
        .catch(function (error) {
            axios
           .get("http://www.omdbapi.com/?t=mr.+nobody&apikey=trilogy")
           console.log(response.data);
        });
} else if (process.argv[2] === "do-what-it-says") {

}




