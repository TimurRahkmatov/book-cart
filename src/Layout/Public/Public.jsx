import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PrivateToken } from "../../constains/PrivateToken";
import { Box } from "@mui/material";
import BackgroundImage from "../../assets/background.png"
const Public = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem(PrivateToken);

  useEffect(() => {
    if (token) {
        navigate("/")
    }
  }, []);
  return (
    <Box >
        <img className="background_image" src={BackgroundImage} alt="background image" />
        <Box sx={{height: "100vh", display:"flex" , justifyContent: "center" , alignItems: "center" , }}>
            <Outlet />
        </Box>
    </Box>
  );
};

export default Public;
