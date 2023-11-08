import { Box, Typography , Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../store/slices/book";
import EditbookModal from "../Modal/EditBookModal";
import { HASH_GET_BOOKS, KEY, SECRET } from "../../constains/hash";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

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
              <DeleteButton id={item?.book?.id} />
              <EditButton id={item?.book?.id} handleOpenModal={handleOpenModal} />
            </Box>
          </Box>
        </Box>
      ))}
      <EditbookModal open={open} setOpen={setOpen} id={id} />
    </>
  );
};

export default BookCard;
