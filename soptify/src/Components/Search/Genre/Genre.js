import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SpotifyContext } from '../../../Context/SpotifyProvider'

const Genre = () => {

      const { id } = useParams();
      const { accessToken } = useContext(SpotifyContext);
      const [GenreData, setGenreData] = useState({})
      const [query, setQuery] = useState('');
      const [searchResult, setSearchResult] = useState(null);
      useEffect(() => {
            if (accessToken) {

            }
      }, [accessToken])

      const handleSearch = async () => {
            try {
                  const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album%2Cplaylist%2Cshow%2Ctrack%2Cepisode%2Cartist%2Caudiobook`, {
                        headers: {
                              'Authorization': `Bearer ${accessToken}`
                        }
                  });
                  console.log(response.data);
                  setSearchResult(response.data)
                  // Process response data here
            } catch (error) {
                  console.error('There was a problem with your fetch operation:', error);
            }
      };
      return (
            <div className="ms-[380px] text-white">
                  <div className='bg-slate-400 rounded-t-lg mt-4'>
                        <input
                              type="text"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              placeholder="Enter your search query"
                              className='block text-black'

                        />
                        <button onClick={() => handleSearch()} className='block'>Search</button>
                  </div>
            </div>
      )
}

export default Genre