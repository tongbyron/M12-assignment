const $ = (id) => document.getElementById(id)

class Jukebox {
    constructor(albums) {
        this.albums = []

        const album1 = new Album('Operation Ivy', 'Energy')
        const album2 = new Album('Blink 182', 'Dude Ranch')
        const album3 = new Album('New Found Glory', 'Sticks and Stones')

        this.addAlbum(album1)
        this.addAlbum(album2)
        this.addAlbum(album3)

        this.albums.forEach( function(item) { 
            const optionObj = document.createElement("option");
            optionObj.textContent = item.artist + ' : ' + item.title;
            $('select_albums').appendChild(optionObj);
         })
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    playAlbum = function() {
        let selectAlbums = $('select_albums')
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].artist + ' : ' + this.albums[i].title == selectAlbums.options[selectAlbums.selectedIndex].text) {
                this.albums[i].play()
            }
        }
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        let favoriteAlbumLabel = $('favoriteAlbum')
        favoriteAlbumLabel.innerHTML = fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// WIRE UP JUKEBOX ON LOAD
window.addEventListener('load', () => {
    var jbox = new Jukebox()
    $('favorite_album').onclick = jbox.favoriteAlbum
    $('play_album').onclick = jbox.playAlbum
})