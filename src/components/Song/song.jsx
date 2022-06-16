import React from 'react';
import './song.scss';

const Song = ({currentSong}) => {
    return (
        <div className="info">
            <div className='info__container'>
                <img className='info__cover' src={currentSong.cover} alt="cover-image" />
                <h1 className='info__name'>{currentSong.name}</h1>
                <h1 className='info__singer'>{currentSong.artist}</h1>
            </div>
        </div>
    );
}

export default Song;
