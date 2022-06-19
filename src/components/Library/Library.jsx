import React from 'react';
import './library.scss'
import arrow from '../../assets/images/arrow.svg';
import LibrarySong from './LibrarySong/LibrarySong';

const Library = ({ 
    songs, 
    currentSong,
    setCurrentSong, 
    libraryState, 
    setLibraryState,
    librarySongPlay,
    audioRef,
    isPlaying
}) => {


    return (
        <div className={libraryState ? 'library library-open' : 'library'} >
            <h2 className='library__title'>Library</h2>
            <button className='library__btn arrow-btn' onClick={() => setLibraryState(false)}>
                <img src={arrow} alt="arrow" />
            </button>
            <ul className="library__list">
                {
                    songs.map((song) => {
                        return (
                            <LibrarySong 
                                key={song.id} 
                                song={song} 
                                songs={songs}
                                currentSong={currentSong} 
                                setCurrentSong={setCurrentSong}
                                librarySongPlay={librarySongPlay}
                                audioRef={audioRef}
                                isPlaying={isPlaying}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Library;
