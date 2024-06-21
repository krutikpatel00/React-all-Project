import React, { useContext, useEffect, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import { SpotifyContext } from '../../Context/SpotifyProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
      const navigation = useNavigate()
      const { accessToken, isLoading, setIsLoading } = useContext(SpotifyContext);

      const [playlists, setplaylists] = useState([]);


      useEffect(() => {
            if (accessToken) {
                  fetchData()
            }
      }, [accessToken]);

      const fetchData = async () => {
            try {
                  const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                        headers: {
                              Authorization: `Bearer ${accessToken}`, // Replace with your access token
                        },
                  });
                  setplaylists(response.data.playlists.items);
                  console.log(response.data);
                  setIsLoading(false)

            } catch (error) {

                  setIsLoading(true)
            } finally {

            }
      };

      const getnewdata = async (id) => {
            navigation('/playlist/' + id)
      }

      return (
            <div className='ms-[400px] text-white'>
                  {isLoading ? (
                        <p>Loading...</p>
                  ) : (
                        <div className='flex flex-wrap'>
                              {
                                    playlists.map((items, pos) => {
                                          return (
                                                <>
                                                      <div className='w-1/5'>
                                                            <div className='hover:bg-[#181513] p-4 rounded-lg' onClick={() => getnewdata(items.id)}>
                                                                  <img src={items.images[0].url} alt="" className='w-full rounded-lg' />
                                                                  <h4 className='text-md my-2'>{items.name}</h4>
                                                                  <p className='text-[15px]
                                                             text-gray-300'>{items.description.slice(0, 40)}</p>
                                                            </div>
                                                      </div>
                                                </>
                                          )
                                    })
                              }
                        </div>
                  )}


            </div>

      );
};

export default Home;
