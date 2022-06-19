import { useState, useRef } from 'react';
import data from '../assets/api/util';
import Song from '../components/Song/song';
import Player from '../components/Player/player';
import Library from '../components/Library/Library';
import Button from '../components/Button/Button';
import menu from '../assets/images/menu.svg';
import visualizerIcon from '../assets/images/visualizer.png';

function PlayerContainer() {

  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryState, setLibraryState] = useState(false);

  const playSongHandler = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play(); 
    setIsPlaying(!isPlaying);
  }

  const librarySongPlay = () => {
    audioRef.current.play();            
    setIsPlaying(true);
  }

  async function play () {
    librarySongPlay()
  }

  const next = () => {
    const songId = songs.indexOf(currentSong)
    if (songId < songs.length-1) setCurrentSong(songs[songId+1])
    else if (songId == songs.length-1) setCurrentSong(songs[0])
    play().then((value) => {
      librarySongPlay()
    })
  }

  const prev = () => {
    const songId = songs.indexOf(currentSong)
    if (songId > 0) setCurrentSong(songs[songId-1])
    play().then((value) => {
      librarySongPlay()
    })
  }

  return (
    <div className="App">
      <Library 
        songs={songs} 
        libraryState={libraryState} 
        setLibraryState={setLibraryState}
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        librarySongPlay={librarySongPlay}
      />
      <div className="player">
        <Button 
          classname={'player__btn arrow-btn'}
          icon={menu} 
          func={setLibraryState} 
        />
        <Button 
          classname={'player__visualizer arrow-btn'}
          icon={visualizerIcon} 
        />
        <Song currentSong={currentSong} />
        <Player 
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          playSongHandler={playSongHandler}
          next={next}
          prev={prev}
        />
      </div>
    </div>
  );
}

export default PlayerContainer;
