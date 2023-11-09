import React from "react";
import BackgroundImage from "../../assets/background.png";
import NotFoundImg from "../../assets/404.png"
import { Box } from "@mui/material";
import PurpleButton from "../../Components/Buttons/PurpleButton/Purplebutton";
import { Link } from "react-router-dom";
import PurpleInfoButton from "../../Components/Buttons/PurpleButton/PurpleInfoButton";
const NotFound = () => {
  return (
    <Box>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <img src={NotFoundImg} alt="404 Page not found" />
        <Box sx={{width: '400px' , display: "flex" , justifyContent: "space-between" , alignItems: "center" , gap: "2rem" , marginTop: '1rem'}} component="div"> 
          <Link style={{width: "100%"}} to="/"><PurpleButton>Go Home page</PurpleButton></Link>
          <Link style={{width: "100%"}} to='/' > <PurpleInfoButton>Reload page</PurpleInfoButton></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
