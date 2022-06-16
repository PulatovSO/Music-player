import React from 'react';
import './library.scss'
import arrow from '../../assets/images/arrow.svg';

const Library = ({ songs, libraryState, setLibraryState }) => {
    return (
        <div className={libraryState ? 'library library-open' : 'library'} >
            <h2 className='library__title'>Library</h2>
            <button 
                className='library__btn arrow-btn'
                onClick={() => setLibraryState(false)}
            >
                <img src={arrow} alt="arrow" />
            </button>
            <ul className="library__list">
                {
                    songs.map((song) => {
                        return(
                            <li className="library__item song">
                                <img className='song__image' src={song.cover} alt="cover" />
                                <div className="song__info">
                                    <h3 className="song__name">{song.name}</h3>
                                    <h3 className="song__author">{song.artist}</h3>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Library;
