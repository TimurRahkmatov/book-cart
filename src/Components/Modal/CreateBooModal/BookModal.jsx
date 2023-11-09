import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Crypto from "crypto-js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createBook } from "../../../store/slices/book";
import { toast } from "react-toastify";
import { KEY, SECRET } from "../../../constains/hash";

const BookModal = ({ open, setOpen }) => {
  const [isbn, setIsbn] = useState("");
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleCreateBook = async (e) => {
    e.preventDefault();
    console.log(SECRET);
    const HASH_CREATE_BOOK = Crypto.MD5(`POST/books{"isbn":"${isbn}"}` + SECRET).toString()
    try {
      const { data } = await axios.post(
        "https://0001.uz/books",
        { isbn: isbn },
        { headers: { Key: KEY, Sign: HASH_CREATE_BOOK } }
      );
      console.log(data);
      if (data?.isOk == true) {
        toast("success added book", { type: "success" });
        dispatch(createBook(data.data));
      }
    } catch (error) {
      if(error?.response.data.message) {
        toast(error?.response.data.message , {type: 'warning'})
      }
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            
            bgcolor: "background.paper",
            border: "2px solid grey",
            boxShadow: 24,
            p: 3,
            borderRadius: "7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Create a book</Typography>
            <Box
              component="div"
              onClick={() => handleClose()}
              sx={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </Box>
          </Box>
          <FormControl
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
              marginTop: "1rem"
            }}
          >
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="pages">
                Book Isbn Number
              </FormLabel>
              <TextField
                placeholder="Mavjud bo'lgan kitob isbn nomerini kiriting"
                id="isb"
                onChange={(e) => setIsbn(e.target.value)}
                sx={{ width: "100%", marginTop: "0.4rem" }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                onClick={() => setOpen(false)}
                sx={{
                  width: "100%",
                  backgroundColor: "#fff",
                  border: "2px solid #6200EE",
                  color: "#6200EE",
                  marginTop: "2rem",
                  textTransform: "none",

                  ":hover": {
                    backgroundColor: "#6200EE",
                    color: "#fff",
                    border: "2px solid #6200EE",
                    textTransform: "none",
                  },
                }}
                type="submit"
              >
                Close
              </Button>
              <Button
                onClick={handleCreateBook}
                sx={{
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "#6200EE",
                  marginTop: "2rem",
                  textTransform: "none",

                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#6200EE",
                    border: "2px solid #6200EE",
                    textTransform: "none",
                  },
                }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default BookModal;
