import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import authService from "../../appwrites/auth";
import { logout } from "../../store/slice/authSlice";

const LogountBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogountBtn;
