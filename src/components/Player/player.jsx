import React, { useRef, useState } from 'react';
import './player.scss';
import forward from '../../assets/images/forward.svg';
import backward from '../../assets/images/backward.svg';
import play from '../../assets/images/play.svg';
import pause from '../../assets/images/pause.svg';

const Player = ({ 
    currentSong, 
    isPlaying, 
    audioRef,
    playSongHandler,
    next,
    prev
}) => {

    // timing control
    const trackTiming = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    // song info
    const [songInfo, setSongInfo] = useState({
        currentTime: '00:00',
        duration: '00:00'
    });

    const timeUpdateHandler = (e) => {
        setSongInfo({
            ...songInfo, 
            currentTime: e.target.currentTime,
            duration: e.target.duration
        })
    }

    const getTime = (time) => {
        return (
            `
                ${Math.floor(time / 60) < 10 ? '0' : ''}${Math.floor(time / 60)}
                :
                ${Math.floor(time % 60) < 10 ? '0' : ''}${Math.floor(time % 60)}
            `
        )
    }

    // volume control
    const volumeRef = useRef(null)

    const volumeControl = (e) => {
        audioRef.current.volume = volumeRef.current.value / 100;
    }

    return (
        <div className='player'>
            <div className="time">
                <p className='time__start'>{getTime(songInfo.currentTime)}</p>
                <input 
                    onChange={trackTiming}
                    className='time__range' 
                    type="range" 
                    max={songInfo.duration ? songInfo.duration : 0}
                    min={0}
                    value={songInfo.currentTime}
                />
                <p className='time__end'>{getTime(songInfo.duration) ? getTime(songInfo.duration) : '00:00'}</p>
            </div>

            <div className="controls">
                <button className="controls-prev__btn btn" name='prev' onClick={(e) => prev()}>
                    <img className='controls__prev-icon' src={backward} alt="backward" />
                </button>
                <button className="controls-play__btn btn" onClick={playSongHandler}>
                    <img className={ isPlaying ? 'controls__play-icon display-none' : 'controls__play-icon'} src={play} alt="play" />
                    <img className={ isPlaying ? 'controls__play-icon' : 'controls__play-icon display-none'} src={pause} alt="pause" />
                </button>
                <button className="controls-next__btn btn" name='next' onClick={(e) => next()} >
                    <img className='controls__next-icon' src={forward} alt="forward" />
                </button>
            </div>

            <div className="volume">
                <span><i className='bx bxs-volume-mute'></i></span>
                <input 
                    className='volume__input'
                    ref={volumeRef} 
                    type="range" 
                    onChange={volumeControl}
                />
                <span><i className='bx bxs-volume-full'></i></span>
            </div>

            <audio 
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
            >
            </audio>
        </div>
    );
}

export default Player;
