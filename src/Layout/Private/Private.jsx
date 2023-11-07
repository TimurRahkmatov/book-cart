import React from "react";
import Header from "../../Components/Header";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateToken } from "../../constains/PrivateToken";
import BackgroundImage from "../../assets/background.png"
const Private = () => {
  const token = localStorage.getItem(PrivateToken);

  return token ? (
    <>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
