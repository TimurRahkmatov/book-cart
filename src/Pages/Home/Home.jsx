import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BookCard from "../../Components/BookCard";
import BookModal from "../../Components/Modal/CreateBooModal";

const Home = () => {
  const [open, setOpen] = useState(false);

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
                7 book
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
                backgroundColor: "#6200EE",
                color: "#fff",
                textTransform: 'none',

                
                ":hover": {
                  backgroundColor: "#fff",
                  color: "#6200EE",
                  textTransform: 'none',
                  border: "1px solid #6200EE",
                },
              }}
            >
              + Create a book 
            </Button>
          </Box>
        </Box>
        <BookModal
           open={open}
           setOpen={setOpen}
         />
        <Box>
          <Typography variant="h6" sx={{ color: "#fff", marginTop: "1rem" }}>
            Your task today
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
