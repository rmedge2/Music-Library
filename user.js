export default class User{
    constructor(userName, playlists = [], allSongs = []){
        this.userName = userName;
        this.playlists = playlists;
        this.allSongs = allSongs;
    }
    intakePlaylist(playlist){
        this.playlists.push(playlist)
    }
    intakeSong(song){
        this.allSongs.push(song)
    }
    removeSong(song)
    removePlaylist(playlist)
}

// We will circle back to this