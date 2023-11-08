import { Box, Modal, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Radio } from "antd";
import Crypto from "crypto-js";

import axios from "axios";

const EditbookModal = ({ open, setOpen, id }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const EditstatusBook = async () => {
    const status = {
      status: value,
    };

    const hash = Crypto.MD5("PATCH/books/" + id + status + "dot").toString();
    console.log("hash", hash);
    try {
      const { data } = await axios.patch(
        "https://0001.uz/books/" + id,
        { "status": 1 },
        { headers: { Key: "dot", Sign: "5ec6adbb5c03bc3b64a688098973126e" } }
      );
      console.log(data);
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
          width: 400,
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
        {/* <Box
          sx={{
            display: "flex",
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="body2">0 - New</Typography>
          <Typography variant="body2">1 - Reading</Typography>
          <Typography variant="body2">2 - Finished</Typography>
        </Box> */}
        <Radio.Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
          onChange={onChange}
          value={value}
        >
          <Radio value={0}>New</Radio>
          <Radio value={1}>Reading</Radio>
          <Radio value={2}>Finished</Radio>
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
