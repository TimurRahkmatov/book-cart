import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { book_api } from "../../Api/book.api";

const BookCard = () => {
    const getAllBookS = async() => {
        try {
            const {data} = await book_api.getAllBooks()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBookS()
    }, [])

  return (
    <Box
      sx={{
        width: "400px",
        backgroundColor: "#fff",
        padding: "1.5rem",
        minHeight: "200px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
      }}
    >
      <Typography
        sx={{ fontSize: "1.1rem", fontWeight: "600", width: "350px" }}
      >
        Raspberry Pi User Guide
      </Typography>
      <Typography sx={{ width: "350px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam
        iusto quidem totam minima! Dolorum a nihil illum necessitatibus
        expedita.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          Eban Upton: <Typography sx={{ color: "grey" }}> 2012-year</Typography>
        </Typography>

        <Box
          sx={{
            width: "80px",
            height: "23px",
            borderRadius: "10px",
            backgroundColor: "#EFE6FD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#9654F4",
          }}
        >
          211 pages
        </Box>
      </Box>
    </Box>
  );
};

export default BookCard;
