import React, { useState, useRef, useEffect } from 'react'
import MusicAudio from '../Data/MusicAudio';
import './Music.css'
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa6";
import { MdPause } from "react-icons/md";

const Music = () => {

      localStorage.setItem('audio', JSON.stringify(MusicAudio))
      const [isMusics, setIsMusics] = useState([])
      const [isPlaying, setIsPlaying] = useState(false);

      const audioRef = useRef(null);
      const [Count, setCount] = useState(0)

      useEffect(() => {
            const data = JSON.parse(localStorage.getItem('audio'))
            setIsMusics(data ? data : [])

      }, [setIsMusics])

      const togglePlay = () => {
            if (isPlaying) {
                  audioRef.current.pause();
            } else {
                  audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
      };

      const NextAudio = () => {
            setCount(Count + 1)
            console.log(MusicAudio.length);
            if (MusicAudio.length - 1 === Count) {
                  setCount(0)
            }
      }
      const PrevAudio = () => {
            if (0 < Count) {
                  setCount(Count - 1)
            }
            if (0 === Count) {
                  setCount(MusicAudio.length - 1)
            }
      }
      console.log(Count);
      console.log(isMusics);
      return (
            <div className='d-flex justify-content-center '>
                  <div className='music-inner'>
                        <div className='music-img'>
                              <img src={MusicAudio[Count].img} alt="" />
                        </div>
                        <div>
                              <audio ref={audioRef} autoPlay name="media" controlslist="nodownload" className='audio-play' src={MusicAudio[Count].musicAudio} controls  ></audio>
                        </div>
                        <div className='controls-items'>
                              <button onClick={() => PrevAudio()}><PiArrowBendDoubleUpLeftBold /></button>
                              <button onClick={togglePlay}>{isPlaying ? <MdPause /> : <FaPlay />}</button>
                              <button onClick={() => NextAudio()}><PiArrowBendDoubleUpRightBold /></button>
                        </div>
                        <div>
                        </div>
                  </div>

            </div >
      )
}

export default Music