import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrites/auth";
import { login, logout } from "./store/slice/authSlice";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
function App() {
  const [loding, setloging] = useState(true);
  const Dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          Dispatch(login({ userData }));
        } else {
          Dispatch(logout());
        }
      })
      .finally(() => setloging(false));
  }, []);

  return !loding ? (
    <div className=" min-h-screen flex flex-wrap justify-between bg-gray-400">
      <div>
        <Header>
          <main>{/* <Outlet /> */}</main>
        </Header>
      </div>
    </div>
  ) : null;
}

export default App;
