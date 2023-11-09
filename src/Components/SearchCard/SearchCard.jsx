import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const SearchCard = () => {
  const search = useSelector((state) => state.book.search);

  return (
    <>
      {search?.map((item) => (
        <Box
          key={item?.id}
          sx={{
            width: "370px",
            boxShadow: "0px 0px 20px #aaaaaa47",
            backgroundColor: "#fff",
            padding: "1.5rem",
            minHeight: "200px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "0.7rem",
          }}
        >
          <Typography
            sx={{ fontSize: "1.1rem", fontWeight: "600", width: "330px" }}
          >
            {item?.title}
          </Typography>
          <Typography sx={{ width: "350px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
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
              {item?.author}
              <Typography sx={{ color: "grey" }}>{item?.published}</Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.3rem",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "1rem",
              }}
            ></Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SearchCard;
