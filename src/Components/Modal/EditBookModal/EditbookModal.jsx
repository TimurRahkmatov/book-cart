import { Box, Modal, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Radio } from "antd";
import Crypto from "crypto-js";

import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editBookStatus } from "../../../store/slices/book";
import { KEY, SECRET } from "../../../constains/hash";

const EditbookModal = ({ open, setOpen, id }) => {
const dispatch = useDispatch()
  const [value, setValue] = useState(1);
  const key = localStorage.getItem("Key");
  const secret = localStorage.getItem("SecretKey");


  const onChange = (e) => {
    setValue(e.target.value);
  };

  const EditstatusBook = async () => {
    const HASH_EDIT_STATUS_BOOK = Crypto.MD5(`PATCH/books/${id}{"status":${value}}` + SECRET).toString();
    try {
      const { data } = await axios.patch(
        "https://0001.uz/books/" + id,
        { "status": value },
        { headers: { Key: KEY, Sign: HASH_EDIT_STATUS_BOOK } }
      );
      if(data.isOk == true) {
        toast("Success updated status" , {type: "success"})
        dispatch(editBookStatus(data?.data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setOpen(false);
  return (
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
          width: {lg: 400 , md: 400 , sm:300, xs: 270},
          bgcolor: "background.paper",
          border: "2px solid grey",
          boxShadow: 24,
          p: 3,
          borderRadius: "7px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit status Book
        </Typography>
        <Radio.Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
          onChange={onChange}
          value={value}
        >
          <Radio value={0}>0-New</Radio>
          <Radio value={1}>1-Reading</Radio>
          <Radio value={2}>2-Finished</Radio>
        </Radio.Group>
        <Button
          onClick={() => EditstatusBook()}
          sx={{ width: "100%", padding: "0.4rem 0", marginTop: "1.3rem" }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default EditbookModal;
