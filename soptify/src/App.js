
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import LeyoutLoginSign from './Leyout/LeyoutLoginSign';
import Sign from './Components/Sign/Sign';
import Home from './Components/Home/Home';
import LeyoutMain from './Leyout/LeyoutMain';
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';
import Playlist from './Components/Playlist/Playlist';
import 'remixicon/fonts/remixicon.css'
import SpotifyProvider, { SpotifyContext } from './Context/SpotifyProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import Genre from './Components/Search/Genre/Genre';

function App() {

  return (
    <BrowserRouter>
      <SpotifyProvider>
        <AppContent />
      </SpotifyProvider>
    </BrowserRouter>
  );
}


const AppContent = () => {

  const { accessToken } = useContext(SpotifyContext)
  const navigate = useNavigate();

  useEffect(() => {

    if (!accessToken) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [accessToken]);

  return <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<LeyoutMain />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/playlist/:id' element={<Playlist />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/genre/:id' element={<Genre />}></Route>
    </Route>
  </Routes>
}

export default App;
