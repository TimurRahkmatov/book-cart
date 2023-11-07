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

const Login = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const handleLogin = async() => {
    try {
      localStorage.setItem("token" , "token")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return token == null ? (
    <Box>
      <Container>
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "black",
                border: "1px solid black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i style={{ color: "red" }} className="fa-brands fa-google"></i>
              Continiue with Google
            </Button>
            <Button
              sx={{
                color: "black",
                border: "1px solid black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i
                style={{ color: "blue" }}
                className="fa-brands fa-facebook"
              ></i>
              Continiue with Facebook
            </Button>
          </Box>
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

            <Link onClick={handleLogin}>
              <Button

                sx={{
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "#6200EE",
                  border: "1px solid #6200EE ",
                  marginTop: "2rem",
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#6200EE",
                  }
                }}
                type="submit"
              >

                Button
              </Button>
            </Link>
            <Typography sx={{ textAlign: "center" }}>
              Already signed up ?{" "}
              <Link style={{ color: "blue" }}>Go to sign up.</Link>
            </Typography>
          </FormControl>
        </Box>
      </Container>
    </Box>
  ) : <Navigate  to="/" />;
};

export default Login;
