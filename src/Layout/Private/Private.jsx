import React from "react";
import Header from "../../Components/Header";
import { Navigate, Outlet } from "react-router-dom";
import BackgroundImage from "../../assets/background.png"
import { KEY } from "../../constains/hash";
const Private = () => {
  const key = localStorage.getItem("Key")
  return key ? (
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
