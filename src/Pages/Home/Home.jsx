import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Crypto from "crypto-js";
import BookCard from "../../Components/BookCard";
import BookModal from "../../Components/Modal/CreateBooModal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateBook } from "../../store/slices/book";
import CreateButton from "../../Components/Buttons/CreateButton";
import SearchCard from "../../Components/SearchCard";

const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state?.book.book);
  const search = useSelector((state) => state.book.search);
  const KEY = localStorage.getItem("Key");
  const SECRET = localStorage.getItem("SecretKey");
  const getBooks = async () => {
    try {
      // Get all books
      const HASH_GET_BOOKS = Crypto.MD5("GET/books" + SECRET).toString();

      const { data } = await axios.get("https://0001.uz/books", {
        headers: { Key: KEY, Sign: HASH_GET_BOOKS },
      });
      if (data?.isOk === true) {
        if(data?.data == null) {
          dispatch(updateBook([]))
        }else {
          dispatch(updateBook(data?.data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("search", search);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Box sx={{ padding: "2rem 0" }} component="section">
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <Box>
            <Typography
              sx={{ display: "flex", gap: "1rem", color: "#fff" }}
              variant="h4"
            >
              You've got{" "}
              <Typography variant="h4" sx={{ color: "#6200EE" }}>
                {state === null ? "0" : state?.length} books
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" , flexWrap: "wrap" }}>
            <TextField
              id="outlined-basic"
              placeholder="Enter your name"
              variant="outlined"
              inputProps={{
                style: {
                  width: "220px",
                  height: "8px",
                },
              }}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            />
            <CreateButton setOpen={setOpen} />
          </Box>
        </Box>
        <BookModal open={open} setOpen={setOpen} />
        <Box>
          <Typography variant="h6" sx={{ color: "#fff", marginTop: "1rem" }}>
            {state.length ? "Your task today" : "You have not books"} 
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            {search == null ? (<BookCard />) : (<SearchCard />)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
