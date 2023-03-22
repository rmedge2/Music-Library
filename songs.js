export default class Song {
    constructor (title, artist, album, genre, runTimeInSeconds){
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
        this.runTimeInSeconds = (runTimeInSeconds % 60 > 9) ? `${Math.floor(runTimeInSeconds / 60)}:${runTimeInSeconds % 60}` : `${Math.floor(runTimeInSeconds / 60)}:0${runTimeInSeconds % 60}`
        // takes time in seconds and displays `minutes:seconds`
    }

}