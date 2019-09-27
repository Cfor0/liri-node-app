# liri-node-app

* This app is designed to take the user input (proccess.argv[2]) from the console and output information associated with the(process.argv[3]).

* Once the data has been retrieved from the API, I grab the first result from the response. These callbacks use `axios` and `spotify` packages.

* User input: 
    * concert-this
        * Outputs (Artist or band name):
            * Name of venue
            * Venue Location
            * Date of Event
    * spotify-this-song
        * Output (song name):
            * Artist
            * Song name
            * Preview link
            * Song album
    * movie-this
        * Output (Movie Name):
            * Title, Year, Ratings, Country, Language, Plot, and Actors


* do-what-it-says
    * This input takes a specfic output from a text file that outputs the `spotify` function for that file.
        

