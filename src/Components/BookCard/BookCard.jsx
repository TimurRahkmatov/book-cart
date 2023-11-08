import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Crypto from "crypto-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../../store/slices/book";
import { Button } from "antd";
import { toast } from "react-toastify";
import EditbookModal from "../Modal/EditBookModal";

const BookCard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const state = useSelector((state) => state?.book.book);
  const key = localStorage.getItem("Key");
  const secret = localStorage.getItem("SecretKey");

  const getBooks = async () => {
    try {
      const hash = Crypto.MD5("GET/books" + "dot").toString();
      const { data } = await axios.get("https://0001.uz/books", {
        headers: { Key: "dot", Sign: hash },
      });
      console.log(data);
      if (data?.isOk === true) {
        dispatch(createBook(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveBook = async (id) => {
    try {
      const hash = Crypto.MD5("DELETE/books/" + id + "dot").toString();
      const { data } = await axios.delete(`https://0001.uz/books/${id}`, {
        headers: {
          Key: "dot",
          Sign: hash,
        },
      });
      if (data?.isOk == true) {
        toast("Success deleted book", { type: "success" });
        dispatch(createBook(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(state);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {state?.map((item) => (
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
            {item?.book.title}
          </Typography>
          <Typography sx={{ width: "350px" }}>{item?.book.cover}</Typography>
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
              {item?.book.author}
              <Typography sx={{ color: "grey" }}>
                {item?.book.published}
              </Typography>
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
              {item?.book.pages}
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "1rem",
            }}
          >
            <Button onClick={() => handleRemoveBook(item?.book?.id)}>
              Delete
            </Button>
            <Button onClick={() => setOpen(true)}>Edit</Button>
          </Box>
        </Box>
      ))}
      <EditbookModal open={open} setOpen={setOpen} />
    </>
  );
};

export default BookCard;
