import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Crypto from "crypto-js";
import BookCard from "../../Components/BookCard";
import BookModal from "../../Components/Modal/CreateBooModal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateBook } from "../../store/slices/book";


const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state?.book.book);
  const secret = localStorage.getItem("SecretKey");


  const getBooks = async () => {
    try {
      const key = localStorage.getItem("Key");
      const hash = Crypto.MD5("GET/books" + secret).toString();
      const { data } = await axios.get("https://0001.uz/books", {
        headers: { Key: key, Sign: hash },
      });
      if (data?.isOk === true) {
        dispatch(updateBook(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };


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
          }}
        >
          <Box>
            <Typography
              sx={{ display: "flex", gap: "1rem", color: "#fff" }}
              variant="h4"
            >
              You've got{" "}
              <Typography variant="h4" sx={{ color: "#6200EE" }}>
                {state === null ?  ("0") : (state?.length)}
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <TextField
              id="outlined-basic"
              placeholder="Enter your name"
              variant="outlined"
              
              inputProps={{
                style: {
                  width: '220px',
                  height: "8px",
                },
              }}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            />
            <Button
              onClick={() => setOpen(true)}
              sx={{
                padding: "0.5rem 1.3rem",
                display: 'flex',
                backgroundColor: "#6200EE",
                color: "#fff",
                textTransform: 'none',
                alignItems: "center",
                justifyContent: "center",
                gap: '0.4rem',
                
                ":hover": {
                  backgroundColor: "#fff",
                  color: "#6200EE",
                  textTransform: 'none',
                  border: "1px solid #6200EE",
                },
              }}
            >
              <i className="fa-solid fa-plus"></i> Create a book 
            </Button>
          </Box>
        </Box>
        <BookModal
           open={open}
           setOpen={setOpen}
         />
        <Box>
          <Typography variant="h6" sx={{ color: "#fff", marginTop: "1rem" }}>
            {state === null ? ("You have not books") : ("Your task today")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            <BookCard />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
