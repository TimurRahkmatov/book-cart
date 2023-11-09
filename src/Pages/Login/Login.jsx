import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PurpleButton from "../../Components/Buttons/PurpleButton/Purplebutton";
import ContinueButton from "../../Components/Buttons/ContinueButton";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginLeft: "0.2rem",
            alignItems: "center",
            padding: '0 1rem'
          }}
        >
          <Box
            sx={{
              padding: "2rem 1.3rem",
              width: "400px",
              height: "530px",
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0px 0px 15px #80808050",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            component="div"
          >
            <Typography sx={{ fontWeight: "500" }} variant="h4">
              Sign In
            </Typography>
            <ContinueButton />
            
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ width: "50%", height: "1px", backgroundColor: "black" }}
                component="div"
              ></Box>
              <Typography variant="body2">OR</Typography>
              <Box
                sx={{ width: "50%", height: "1px", backgroundColor: "black" }}
                component="div"
              ></Box>
            </Box>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Your email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Your username"
                variant="outlined"
              />

              <Link>
                <PurpleButton type="submit">SUBMIT</PurpleButton>
              </Link>
              <Typography sx={{ textAlign: "center" }}>
                Already signed up ?{" "}
                <Link to="/register" style={{ color: "blue" }}>
                  Go to sign up.
                </Link>
              </Typography>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
