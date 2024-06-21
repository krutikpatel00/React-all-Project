import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeys } from "../constants/LocalStorageKeys";

export const SpotifyContext = createContext();

// Spotify API credentials
const CLIENT_ID = "68df7980c6ea44c39ceb68623eb14fb0";
const CLIENT_SECRET = "84589a5df4b34eb984c3ed341c0321cb";
const REDIRECT_URI = "http://localhost:3000/";
const SCOPE = "user-read-private user-read-email";

const SpotifyProvider = ({ children }) => {
      const Navigation = useNavigate()
      const [accessToken, setAccessToken] = useState();
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            const token = getTokenFromLocalStorage();
            if (!token) return;
            setAccessToken(token);
      }, []);

      const getTokenFromLocalStorage = () => {
            return localStorage.getItem(LocalStorageKeys.SPOTIFY_TOKEN);
      }

      const getSpotifyToken = async () => {
            const data = new URLSearchParams();
            data.append('grant_type', 'client_credentials');
            data.append('client_id', CLIENT_ID);
            data.append('client_secret', CLIENT_SECRET);

            try {
                  const response = await axios.post('https://accounts.spotify.com/api/token', data, {
                        headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        },
                  });


                  localStorage.setItem(LocalStorageKeys.SPOTIFY_TOKEN, response.data.access_token);
                  setAccessToken(response.data.access_token);

                  return response.data.access_token;

            } catch (error) {
                  localStorage.clear()
                  Navigation("/login")
                  console.log({ spotifyLoginTokrnError: error });
                  console.log(error);
            }
      }




      const logOut = async () => {
            localStorage.clear()
            Navigation("/login")

      }

      return (
            <SpotifyContext.Provider value={{ accessToken, isLoading, setIsLoading, getSpotifyToken, logOut }}>
                  {children}
            </SpotifyContext.Provider>
      );
}

export default SpotifyProvider;
