export default class Playlist {
    constructor (playlistName, songs = []){
        this.playlistName = playlistName;
        this.songs = songs;
    }
    addSong(song) {
        this.songs.push(song);
    }

    // removeSong(song){
    // }
}

