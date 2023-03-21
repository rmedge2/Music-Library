import User from "./user.js";
import Song from "./songs.js";
import Playlist from "./playlists.js";
// const prompt = require('prompt-sync')({sigint: true});


// Creates a User Library
let BigRod = new User ("Rodney Edge Jr")

//Songs
let thePayback = new Song ("The Payback", "James Brown", "The Payback", "Funk", 210)
let sirDuke = new Song("Sir Duke", "Stevie Wonder", "Songs in the Key of Life", `Soul`, 234)
let singAboutMe = new Song(`Sing About Me, I'm Dying of Thirst`, "Kendrick Lamar", `good kid, m.A.A.d. city`, "Rap", 723)
let duckworth = new Song(`DUCKWORTH`, `Kendrick Lamar`, `DAMN`, `Rap`, 249)
let superstition = new Song (`Superstition`, `Stevie Wonder`, `Talking Book`, `Soul`, 266)

//Adds song to user library
BigRod.intakeSong(thePayback)
BigRod.intakeSong(sirDuke)
BigRod.intakeSong(superstition, singAboutMe, duckworth)

// Playlist names
let Funk = new Playlist("Funk")
let Favorites = new Playlist("Favorites")
let Rap = new Playlist(`Rap`)
let Stevie = new Playlist(`Stevie!`)

//Adding songs to playlist
Funk.addSong(thePayback)

Rap.addSong(singAboutMe, duckworth)

Stevie.addSong(sirDuke, superstition)



// Intakes the playlists to be the user's personal playlist
BigRod.intakePlaylist(Favorites)
BigRod.intakePlaylist(Stevie)
BigRod.intakePlaylist(Rap)
BigRod.intakePlaylist(Funk)

console.log(Rap)