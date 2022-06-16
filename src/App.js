import { useState } from 'react';
import './assets/styles/main.scss';
import Song from './components/Song/song';
import Player from './components/Player/player';
import data from './assets/api/util'
import Library from './components/Library/Library';
import menu from './assets/images/menu.svg';
 
function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryState, setLibraryState] = useState(false);

  return (
    <div className="App">
      <Library songs={songs} libraryState={libraryState} setLibraryState={setLibraryState} />
      <div className="player">
        <button 
          className='player__btn arrow-btn'
          onClick={() => setLibraryState(true)}
        >
          <img src={menu} alt="arrow" />
        </button>
        <Song currentSong={currentSong} />
        <Player 
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
}

export default App;
