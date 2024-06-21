import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SpotifyContext } from '../../Context/SpotifyProvider'

function calculateWeeksDifference(givenDate) {
      // Convert given date to a Date object
      const givenDateTime = new Date(givenDate);

      // Calculate the difference in milliseconds between the given date and the current date
      const timeDifference = Date.now() - givenDateTime.getTime();

      // Convert milliseconds to weeks (1 week = 7 days = 7 * 24 * 60 * 60 * 1000 milliseconds)
      const weeksDifference = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));

      return weeksDifference;
}
function formatDuration(durationInMilliseconds) {
      // Convert duration to seconds
      const durationInSeconds = durationInMilliseconds / 1000;

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = Math.floor(durationInSeconds % 60);

      // Construct formatted string
      let formattedDuration = '';
      if (hours > 0) {
            formattedDuration += hours + ':';
      }
      if (minutes >= 0) {
            formattedDuration += minutes + ':';
      }
      if (seconds >= 0 || (hours === 0 && minutes === 0)) {

            if (seconds <= 9) {
                  formattedDuration += seconds + '0';
            } else {
                  formattedDuration += seconds;
            }

      }

      return formattedDuration;
}

const Playlist = () => {

      const { id } = useParams()
      const { accessToken } = useContext(SpotifyContext)
      const [playlistData, setPlaylistData] = useState([]);

      useEffect(() => {
            fetchData();
      }, [id, accessToken, setPlaylistData]);



      const fetchData = async () => {
            console.log({ id });
            try {
                  const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${accessToken}`
                        }
                  });

                  setPlaylistData(response.data)
            } catch (error) {
                  console.error('Error fetching playlist data:', error);
            }
      };



      return (
            <div className='ms-[380px] text-white mt-2'>

                  <div className='bg-slate-400 p-6 rounded-xl'>
                        <div className='d-flex items-end'>
                              <div>
                                    {playlistData.images && playlistData.images.length > 0 &&
                                          <img src={playlistData.images[0].url} alt='song' className='rounded-lg' />
                                    }                              </div>
                              <div className='ms-8'>
                                    <span>{playlistData.type}</span>
                                    <h2 className='text-8xl py-4'>{playlistData.name}</h2>
                                    <p className='mb-4'>{
                                          playlistData.description
                                    }
                                    </p>
                                    <div className='d-flex'>
                                          <span>{` ${playlistData.followers?.total} links ${playlistData.tracks?.total} songs`}</span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='text-white p-6'>
                        <div className='d-flex items-center'>
                              <div>
                                    <a href classname="h-16 d-flex justify-center items-center w-16 rounded-full bg-[#2BAB58] text-4xl">
                                          <i className="ri-play-fill" />
                                    </a>
                                    <a href classname="ms-6 inline-block text-white text-4xl">
                                          <i className="ri-add-circle-line" />
                                    </a>
                                    <a href classname="ms-6 inline-block text-white text-4xl">
                                          <i className="ri-draggable" />
                                    </a>
                              </div>

                        </div>
                  </div>
                  <div className='p-6'>
                        <div className='d-flex items-center justify-between px-4 py-2 border-b
                         '>
                              <div>
                                    <span>#</span>
                              </div>
                              <div>
                                    <span>Title</span>
                              </div>
                              <div>
                                    <span>Album</span>
                              </div>
                              <div>
                                    <span>Date added</span>
                              </div>
                              <div>
                                    <span><i class="ri-time-line"></i></span>
                              </div>
                        </div>
                        {
                              playlistData.tracks?.items.map((tracks, pos) => {
                                    return (

                                          <div className='d-flex items-center justify-between px-4 py-2'>
                                                <div className='w-1/12'>
                                                      <span>{++pos}</span>
                                                </div>
                                                <div className='w-4/12'>
                                                      <ul className='d-flex items-center'>
                                                            <li>
                                                                  <img src={tracks.track.album.images[2].url} alt="" />
                                                            </li>
                                                            <li className='ms-4'>
                                                                  <h4>{tracks.track?.name}</h4>
                                                                  <p>{tracks.track?.artists.map((artis, pos) => {
                                                                        return (
                                                                              `${artis.name} , `
                                                                        )
                                                                  })}</p>
                                                            </li>
                                                      </ul>
                                                </div>
                                                <div className='w-4/12'>
                                                      <span>
                                                            {tracks.track?.name.slice(0, 20)}...
                                                      </span>
                                                </div>
                                                <div className='w-1/12'>
                                                      <span>{`${calculateWeeksDifference(tracks.added_at)} week ago`}</span>
                                                </div>
                                                <div className='w-1/12'>
                                                      <span>{formatDuration(tracks.track.duration_ms)}</span>
                                                </div>
                                          </div>

                                    )
                              })

                        }
                  </div>

            </div >
      )
}

export default Playlist