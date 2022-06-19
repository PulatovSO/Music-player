import React from 'react';

const LibrarySong = ({ 
    song, 
    songs, 
    currentSong,
    setCurrentSong,
    librarySongPlay
}) => {

    async function play () {
        librarySongPlay()
    }

    const selectSongHandler = () => {
        const selectedSong = songs.filter((state) => state.id === song.id)
        setCurrentSong(song)
        
        play().then((value) => {
            librarySongPlay()
        })
    }

    return (
        <li className={currentSong.id === song.id ? "library__item song active-song" : "library__item song"} onClick={selectSongHandler}>
            <img className='song__image' src={song.cover} alt="cover" />
            <div className="song__info">
                <h3 className="song__name">{song.name}</h3>
                <h3 className="song__author">{song.artist}</h3>
            </div>
        </li>
    );
}

export default LibrarySong;
