import { Box, Typography , Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Crypto from "crypto-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, updateBook } from "../../store/slices/book";
import { toast } from "react-toastify";
import EditbookModal from "../Modal/EditBookModal";
import { HASH_GET_BOOKS, KEY, SECRET } from "../../constains/hash";

const BookCard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const state = useSelector((state) => state?.book.book);
  const handleOpenModal = (open, id) => {
    setOpen(open);
    setId(id);
  };

  const getBooks = async () => {
    try {
      const { data } = await axios.get("https://0001.uz/books", {
        headers: { Key: KEY, Sign: HASH_GET_BOOKS },
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

  const handleRemoveBook = async (id) => {
    try {
      const HASH_REMOVE_BOOK = Crypto.MD5(
        "DELETE/books/" + id + SECRET
      ).toString();
      const { data } = await axios.delete(`https://0001.uz/books/${id}`, {
        headers: {
          Key: KEY,
          Sign: HASH_REMOVE_BOOK,
        },
      });
      if (data?.isOk == true) {
        toast("Success deleted book", { type: "success" });
        dispatch(deleteBook(data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {state?.map((item) => (
        <Box
          key={item?.book.id}
          sx={{
            width: "370px",
            boxShadow: "0px 0px 20px #aaaaaa47",
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
            {item?.book?.title}
          </Typography>
          <Typography sx={{ width: "350px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            minus. Nostrum iste!
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
              {item?.book?.author}
              <Typography sx={{ color: "grey" }}>
                {item?.book?.published}
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
              {item?.book?.pages}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.3rem",
            }}
          >
            <Typography variant="subtitle1">status:{item?.status}</Typography>
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
              <Button sx={{width: "87px" , height: '33px' , backgroundColor: 'red' , display: "flex" , alignItems: 'center' , gap: '0.3rem' , color: "#fff"  , textTransform: "none" , ":hover": {
                  backgroundColor: "#fff",
                  color: "red",
                  textTransform: 'none',
                  border: "1px solid red",
                }}}  component="button" onClick={() => handleRemoveBook(item?.book?.id)}>
              <i className="fa-solid fa-trash"></i> Delete
              </Button>
              <Button sx={{width: "87px" , height: '33px' , backgroundColor: 'green' , display: "flex" , alignItems: 'center' , gap: '0.3rem' , color: "#fff"  , textTransform: "none" , ":hover": {
                  backgroundColor: "#fff",
                  color: "green",
                  textTransform: 'none',
                  border: "1px solid green",
                }}} onClick={() => handleOpenModal(true, item?.book?.id)}>
              <i className="fa-solid fa-pen-nib"></i>
                Edit
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      <EditbookModal open={open} setOpen={setOpen} id={id} />
    </>
  );
};

export default BookCard;
