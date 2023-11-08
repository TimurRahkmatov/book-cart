import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BackgroundImage from "../../assets/background.png"
import { KEY } from "../../constains/hash";
const Public = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (KEY) {
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
