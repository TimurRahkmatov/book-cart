import { Button } from "@mui/material";
import React from "react";
import Crypto from "crypto-js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { KEY, SECRET } from "../../../constains/hash";
import { deleteBook } from "../../../store/slices/book";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    const handleRemoveBook = async () => {
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
    <Button sx={{width: "87px" , height: '33px' , backgroundColor: 'red' , display: "flex" , alignItems: 'center' , gap: '0.3rem' , color: "#fff"  , textTransform: "none" , ":hover": {
        backgroundColor: "#fff",
        color: "red",
        textTransform: 'none',
        border: "1px solid red",
      }}}  component="button" onClick={() => handleRemoveBook()}>
    <i className="fa-solid fa-trash"></i> Delete
    </Button>
  )
}

export default DeleteButton