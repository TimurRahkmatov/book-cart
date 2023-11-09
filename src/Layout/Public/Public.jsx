import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BackgroundImage from "../../assets/background.png"
import { KEY } from "../../constains/hash";
const Public = () => {
  const key = localStorage.getItem("Key")
  return key === null ?  (
    <Box >
        <img className="background_image" src={BackgroundImage} alt="background image" />
        <Box sx={{height: "100vh", display:"flex" , justifyContent: "center" , alignItems: "center" , }}>
            <Outlet />
        </Box>
    </Box>
  ) : <Navigate to='/'/>;
};

export default Public;
