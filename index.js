import User from "./user.js";
import Song from "./songs.js";
import Playlist from "./playlists.js";
const prompt = require('prompt-sync')({sigint: true});


// Creates a User Library
let BigRod = new User ("Rodney Edge Jr")

//Songs
let thePayback = new Song ("The Payback", "James Brown", "The Payback", "Funk", 210)
let sirDuke = new Song("Sir Duke", "Stevie Wonder", "Songs in the Key of Life")

// Playlist names
let Funk = new Playlist("Funk")
let Favorites = new Playlist("Favorites")
Funk.addSong(thePayback)
BigRod.intakeSong(thePayback)

console.log(BigRod)
