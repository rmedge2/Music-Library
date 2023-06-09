export default class Playlist {
    constructor(playlistName, songs = []) {
        this.playlistName = playlistName;
        this.songs = songs;
    }
    addSong(...song) {
        this.songs.push(...song);
    }
    removeFromPlaylist(song) {
        const index = this.songs.indexOf(song)
        if (index > -1) {
            this.songs.splice(index, 1)
        }
    }
}

