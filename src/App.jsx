import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import './BookCanvas.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import OpeningAnimation from './components/OpeningAnimation'

const App = () => {
  // ------------------Cake loader 
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(false);

  // Background Music State
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default 30%

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setAnimateOut(true), 8400);
      setTimeout(() => setLoading(false), 9000);
      setTimeout(() => setShowContent(true), 8600);
      
      // Show mobile hint on first load for mobile devices
      const isMobile = window.innerWidth <= 768;
      const hasSeenHint = localStorage.getItem('hasSeenMobileHint');
      if (isMobile && !hasSeenHint && showContent) {
        setTimeout(() => {
          setShowMobileHint(true);
          // Auto-hide after 4 seconds
          setTimeout(() => {
            setShowMobileHint(false);
            localStorage.setItem('hasSeenMobileHint', 'true');
          }, 4000);
        }, 1000);
      }
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, [showContent]);

  // Initialize background music
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !loading && showContent) {
      audio.volume = volume;
      audio.loop = true;
      
      // Try to play automatically when loading is complete
      const tryAutoPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked, user interaction required");
          setIsPlaying(false);
        }
      };

      tryAutoPlay();
    }
  }, [loading, showContent]);

  // Update volume when it changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  // Music control functions
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("Play failed:", err);
        });
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Route>
  ))

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src="/yellow.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Aesthetic Music Controls */}
      {showContent && (
        <div className="music-player">
          <div className="music-player-content">
            <div className="music-info">
              <div className="song-title">Yellow</div>
              <div className="artist-name">Coldplay</div>
            </div>
            <div className="music-controls-container">
              <button onClick={toggleMusic} className="play-pause-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="control-icon">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="control-icon">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <div className="volume-control">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="volume-icon">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                  aria-label="Volume"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Hint */}
      {showMobileHint && (
        <div className="mobile-hint">
          <div className="mobile-hint-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hint-icon">
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <p>Use "Back" buttons to navigate on mobile</p>
          </div>
        </div>
      )}

      {loading && <OpeningAnimation animateOut={animateOut}/>}
      {showContent && <RouterProvider router={MyRoute} />}
    </>
  )
}

export default App