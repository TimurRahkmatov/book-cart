
import { Button } from "@mui/material";
import React from "react";

const CreateButton = ({ setOpen }) => {
  return (
    <Button
      onClick={() => setOpen(true)}
      sx={{
        padding: "0.5rem 1.3rem",
        display: "flex",
        backgroundColor: "#6200EE",
        color: "#fff",
        textTransform: "none",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",

        ":hover": {
          backgroundColor: "#fff",
          color: "#6200EE",
          textTransform: "none",
          border: "1px solid #6200EE",
        },
      }}
    >
      <i className="fa-solid fa-plus"></i> Create a book
    </Button>
  );
};

export default CreateButton;
