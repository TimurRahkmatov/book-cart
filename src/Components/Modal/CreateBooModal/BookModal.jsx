import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const BookModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
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
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="title">
                Title
              </FormLabel>
              <TextField
              placeholder="Enter your title"
                id="title"
                sx={{ width: "100%", marginTop: "0.3rem" }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="author">
                Author
              </FormLabel>
              <TextField
              placeholder="Enter your author"
              
                id="author"
                sx={{ width: "100%" , marginTop: "0.3rem" }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="cover">
                Cover
              </FormLabel>
              <TextField
              placeholder="Enter your cover"

                id="cover"
                sx={{ width: "100%" , marginTop: "0.3rem"}}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="Published">
                Published
              </FormLabel>
              <TextField
              placeholder="Enter your published"

                id="Published"
                sx={{ width: "100%" , marginTop: "0.3rem" }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box>
              <FormLabel sx={{ color: "black" }} htmlFor="pages">
                Pages
              </FormLabel>
              <TextField
              placeholder="Enter your pages"

                id="pages"
                sx={{ width: "100%" , marginTop: "0.3rem" }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "8px",
                  },
                }}
              />
            </Box>
            <Box sx={{display: "flex" , justifyContent: "space-between" , alignItems: "center" , gap: "1rem"}}>
            <Button
                sx={{
                  width: "100%",
                  color: "#fff",
                  border: "2px solid #6200EE",
                  color: "#6200EE",
                  marginTop: "2rem",
                  ":hover": {
                    backgroundColor: "#6200EE",
                    color: "#fff",
                    border: "2px solid #6200EE"
                  },
                }}
                type="submit"
              >
                Close
              </Button>
              <Button
                sx={{
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "#6200EE",
                  marginTop: "2rem",
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#6200EE",
                    border: "2px solid #6200EE"
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