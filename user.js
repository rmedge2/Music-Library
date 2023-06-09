export default class User {
    constructor(userName, playlists = [], songLibrary = []) {
        this.userName = userName;
        this.playlists = playlists;
        this.songLibrary = songLibrary;
    }
    intakePlaylist(playlist) {
        this.playlists.push(playlist)
    }
    intakeSong(...song) {
        this.songLibrary.push(...song)
    }
    removeSongFromLibrary(song) {
        const index = this.songLibrary.indexOf(song)
        if(index > -1){
            this.songLibrary.splice(index, 1)
            
            // now search through each playlist
            // ensuring the song is automatically removed from the playlists
            this.playlists.forEach(function (element) {
                element.removeFromPlaylist(song)
            })
        }
        
    }
    removePlaylistFromLibrary(playlist) {
        const index = this.playlists.indexOf(playlist)
        if(index > -1){
            this.playlists.splice(index, 1)
        }
    }
}

// We will circle back to this