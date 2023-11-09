import { Box, Container, FormLabel, Input } from "@mui/material";
import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Api/user.api";
import { KEY, SECRET } from "../../constains/hash";
import Crypto from "crypto-js";
import { searchGet } from "../../store/slices/book";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  if (!search) {
    dispatch(searchGet(null));
  }

  const GetSearchBooks = async (value) => {
    try {
      if (search == '') {
        const HASH_GET_SEARCH = Crypto.MD5(
          "GET/books/" + value + SECRET
        ).toString();
        const { data } = await axios.get(BASE_URL + `/books/${value}`, {
          headers: { Key: KEY, Sign: HASH_GET_SEARCH },
        });
        if (data.isOk === true) {
          dispatch(searchGet(data?.data));
        }
      } else {
        dispatch(searchGet(null))
      }
    } catch (error) {
      dispatch(searchGet(null));
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setSearch(value);
    GetSearchBooks(value);
  };

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
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
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
              value={search}
              onChange={(e) => handleChange(e.target.value)}
              name="my-input"
              placeholder="Search for any training you want"
              aria-describedby="my-helper-text"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <i
              style={{ fontSize: "1.5rem" }}
              className="fa-regular fa-bell"
            ></i>
            <img src={Avatar} alt="" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
