import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
import UserView from './Components/UserView';
import UserUpData from './Components/UserUpData';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/userview' element={<UserView />}></Route>
        <Route path='/userview/updata/:id' element={<UserUpData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
