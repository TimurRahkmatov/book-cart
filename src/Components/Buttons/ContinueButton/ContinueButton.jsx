import { Box , Button} from "@mui/material";
import React from "react";

const ContinueButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Button
      
        sx={{
          color: "black",
          border: "1px solid black",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: {lg: "15px" , md: "15px" , sm: "15px" , xs: "13px"}
        }}
      >
        <i style={{ color: "red" }} className="fa-brands fa-google"></i>
        Continiue with Google
      </Button>
      <Button
        sx={{
          color: "black",
          border: "1px solid black",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: {lg: "15px" , md: "15px" , sm: "15px" , xs: "13px"}

        }}
      >
        <i style={{ color: "blue" }} className="fa-brands fa-facebook"></i>
        Continiue with Facebook
      </Button>
    </Box>
  );
};

export default ContinueButton;
