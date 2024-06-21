
import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../../Context/SpotifyProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Search = () => {

      const navigator = useNavigate()
      const [categories, setCategories] = useState([]);
      const { accessToken } = useContext(SpotifyContext);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            if (accessToken) {
                  fetchData()
            }
      }, [accessToken]);

      const fetchData = async () => {
            try {
                  try {
                        const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
                              headers: {
                                    Authorization: `Bearer ${accessToken}`, // Replace with your access token
                              },
                        });

                        console.log(response.data);
                        setCategories(response.data.categories.items);
                  } catch (error) {
                        console.log('Failed to fetch categories');
                  }
            } catch (error) {
                  console.log(error.message);
            }
      };
      console.log(categories);
      return (
            <div className="ms-[380px]">
                  {
                        <div className="py-4 px-2">
                              <div className="flex flex-wrap">

                                    {categories?.map((items, index) => {
                                          return (
                                                <div className=" 2xl:w-2/12 xl:w-4/12 lg:w-3/12 md:w-6/12 w-full" key={index}>
                                                      <div className="relative m-2 rounded-xl" onClick={() => navigator('/genre/' + items.id)}>
                                                            <h4 className="text-white absolute top-2 left-2 text-lg">{items.name}</h4>
                                                            <img src={items.icons[0].url} className="w-full rounded-xl" alt="" />
                                                      </div>
                                                </div>
                                          );
                                    })}

                              </div>
                        </div>
                  }


            </div>
      );
};

export default Search;
