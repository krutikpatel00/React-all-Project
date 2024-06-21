
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const NewMusic = () => {
      const [currentTrack, setCurrentTrack] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const [playlist, setPlaylist] = useState([
            { title: 'Song 1', src: '../Audio/Aarambh.mp3' },
            { title: 'Song 2', src: '../Audio/jootajpani.mp3' },
            // Add more songs as needed
      ]);

      const playTrack = (track) => {
            setCurrentTrack(track);
            setIsPlaying(true);
      };

      const pauseTrack = () => {
            setIsPlaying(false);
      };

      const skipTrack = (direction) => {
            const currentIndex = playlist.findIndex(track => track === currentTrack);
            let newIndex = currentIndex + direction;
            if (newIndex < 0) {
                  newIndex = playlist.length - 1;
            } else if (newIndex >= playlist.length) {
                  newIndex = 0;
            }
            playTrack(playlist[newIndex]);
      };

      return (
            <div className="music-player">
                  <div className="current-track">
                        {currentTrack && (
                              <p>Now Playing: {currentTrack.title}</p>
                        )}
                  </div>
                  <div className="player-controls">
                        <button onClick={() => skipTrack(-1)}>Previous</button>
                        {isPlaying ? (
                              <button onClick={pauseTrack}>Pause</button>
                        ) : (
                              <button onClick={() => playTrack(playlist[0])}>Play</button>
                        )}
                        <button onClick={() => skipTrack(1)}>Next</button>
                  </div>
                  <div className="playlist">
                        {playlist.map((track, index) => (
                              <div key={index} className="track">
                                    <p>{track.title}</p>
                                    <button onClick={() => playTrack(track)}>Play</button>
                              </div>
                        ))}
                  </div>
                  {currentTrack && (
                        <ReactAudioPlayer
                              src={currentTrack.src}
                              autoPlay={isPlaying}
                              onPause={pauseTrack}
                              onEnded={() => skipTrack(1)}
                        />
                  )}
            </div>

      )
}

export default NewMusic