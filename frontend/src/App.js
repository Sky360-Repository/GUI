import { useState, useRef, useEffect } from "react";
import "./App.css";
import VideoPlayer from "react-video-player-extended";
import CanvasDraw from "react-canvas-draw";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [disabled, setDisabled] = useState(false);
  const canvasRef = useRef(null);
  const [brushRadius, setBrushRadius] = useState(0);
  const pngData = localStorage.getItem("savedDrawing");

  const [showCanvas, setShowCanvas] = useState(
    !!localStorage.getItem("savedDrawing")
  );

  const handleProgress = (e) => {
    console.log("Current time: ", e.target.currentTime);
  };
  const handleSaveCanvas = () => {
    localStorage.setItem("savedcoords", canvasRef.current.getSaveData());
    localStorage.setItem("savedDrawing", canvasRef.current.getDataURL());
    window.location.reload();
  };

  useEffect(() => {
    const coords = localStorage.getItem("savedcoords");
    if (coords) {
      canvasRef.current.loadSaveData(coords, true);
    }
  });

  const clearCanvas = () => {
    canvasRef.current.eraseAll();
    localStorage.removeItem("savedDrawing");
    window.location.reload();
  };

  console.log({ disabled, brushRadius });

  return (
    <div>
      <div
        className="App"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div style={{ position: "relative" }}>
          {pngData && (
            <img
              src={pngData}
              alt="saved drawing"
              style={{
                width: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "1",
              }}
            />
          )}
          {showCanvas && (
            <CanvasDraw
              brushColor="#000000"
              brushRadius={15}
              lazyRadius={1}
              ref={(canvasDraw) => (canvasRef.current = canvasDraw)}
              hideGrid
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "calc(100% - 2.2rem)",
                zIndex: "1",
                background: "transparent",
              }}
            />
          )}
          <VideoPlayer
            url="http://localhost:3000/4.mkv"
            fps={10}
            height="auto"
            width={840}
            onProgress={handleProgress}
            controls={[
              "Play",
              "Time",
              "Progress",
              "Volume",
              "FullScreen",
              "NextFrame",
              "LastFrame",
            ]}
            isPlaying={isPlaying}
            volume={volume}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onVolume={(v) => setVolume(v)}
          />
        </div>
      </div>
      <button onClick={() => setShowCanvas(!showCanvas)}>
        {showCanvas ? "Hide Canvas" : "Show Canvas"}
      </button>
      {showCanvas && <button onClick={handleSaveCanvas}>Save Canvas</button>}
      {pngData && <button onClick={clearCanvas}>Delete Canvas</button>}
    </div>
  );
}

export default App;
