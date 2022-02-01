import { useState  } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from 'react-video-player-extended';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const handleProgress = (e) => {
    console.log('Current time: ', e.target.currentTime)
  }
  return (
    <div className="App" style={{width: '100%', display: 'flex', justifyContent: 'center' }}>
      <VideoPlayer
        url="http://localhost:8000/static/videos/unknown1.mp4"
        fps={10}
        height="auto"
        width={840}
        onProgress={handleProgress}
        controls={['Play', 'Time', 'Progress', 'Volume', 'FullScreen', 'NextFrame', 'LastFrame']}
        isPlaying={isPlaying}
        volume={volume}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolume={v => setVolume(v)}
      />
    </div>
  );
}

export default App;
