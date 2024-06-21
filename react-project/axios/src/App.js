import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import BookAdd from './Components/Books/BookAdd';
import BookView from './Components/Books/BookView';
import BookUpdata from './Components/Books/BookUpdata';


import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/bookadd' element={<BookAdd />} />
          <Route path='/bookview' element={<BookView />} />
          <Route path='/bookview/bookupdata/:id' element={<BookUpdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
