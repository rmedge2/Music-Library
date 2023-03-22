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
let giveUpTheFunk = new Song(`Give Up The Funk`, `Parliament`, `Mothership Connection`, `Funk`, 346)


//Adds song to user library
BigRod.intakeSong(thePayback, giveUpTheFunk)
BigRod.intakeSong(sirDuke)
BigRod.intakeSong(superstition, singAboutMe, duckworth)

// Playlist names
let Funk = new Playlist("Funk")
let Favorites = new Playlist("Favorites")
let Rap = new Playlist(`Rap`)
let Stevie = new Playlist(`Stevie!`)

//Adding songs to playlist
Funk.addSong(thePayback, giveUpTheFunk)
Rap.addSong(singAboutMe, duckworth)
Stevie.addSong(sirDuke, superstition)
Favorites.addSong(giveUpTheFunk, sirDuke, superstition)



// Intakes the playlists to be the user's personal playlist
BigRod.intakePlaylist(Favorites)
BigRod.intakePlaylist(Stevie)
BigRod.intakePlaylist(Rap)
BigRod.intakePlaylist(Funk)

// Testing my removal from playlist
console.log(`Now, I will test my ability to remove a song from my "Stevie" playlist that's shown below:`)
console.log(Stevie)
Stevie.removeFromPlaylist(sirDuke)
console.log(`If executed properly, the playlist below should no longer have the song "Sir Duke"...`)
console.log(Stevie)
console.log(`But the song should still appear in my song library, as demonstrated below:`)
console.log(BigRod.songLibrary)
console.log(`And that's because I only removed it from the playlist, but NOT from my song library.`)

console.log(`\nNow let's add the song back to the playlist.`)
Stevie.addSong(sirDuke)
console.log(`If executed correctly, the song should now be added back to the playlist:`)
console.log(Stevie)

// Demonstrating Library removal
console.log(`\n We will now demonstrate what happens if I instead remove the same song fromy LIBRARY that's displayed below:`)
console.log(BigRod.songLibrary)
BigRod.removeSongFromLibrary(sirDuke)
console.log(`If my code has executed correctly thus far, we will now see below that \n
"Sir Duke" no longer appears in the song library.`)
console.log(BigRod.songLibrary)
console.log(`Additionally, the song should no longer appear in my "Stevie" playlist \n
since the song is no longer in my library:`)
console.log(Stevie)


// now it's time to make the library more interactive...or not