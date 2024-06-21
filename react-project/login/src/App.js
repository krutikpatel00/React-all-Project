
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './Components/Music';
import NewMusic from './Components/NewMusic';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route path='/' element={<Music />} /> */}
        <Route path='/' element={<NewMusic />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
