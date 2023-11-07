import { Box, Container, FormLabel, Input } from "@mui/material";
import React from "react";
import LogoImg from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
const Header = () => {
  return (
    <Box sx={{ padding: "1.5rem 0" }} component="header">
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img src={LogoImg} alt="" />
            <FormLabel htmlFor="my-input">
              <i
                style={{ color: "#fff" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </FormLabel>
            <Input
              sx={{ width: "250px", color: "#fff" }}
              id="my-input"
              name="my-input"
              placeholder="Search for any training you want"
              aria-describedby="my-helper-text"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <i style={{fontSize: "1.5rem"}} className="fa-regular fa-bell"></i>
            <img src={Avatar} alt="" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
