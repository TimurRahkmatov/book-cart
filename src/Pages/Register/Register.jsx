import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth_api } from "../../Api/user.api";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    key: "",
    secret: "",
  });

  function handleInputChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await auth_api.register(values);
      if (data?.isOk === true) {
        toast("Success registered", { type: "success" });
        localStorage.setItem("Key" , data?.data?.key);
        localStorage.setItem("SecretKey" , data?.data?.secret)
        navigate("/");
      }
    } catch (error) {
      toast(error?.response?.data?.message, { type: "warning" });
    }
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            padding: "2rem 1.3rem",
            width: "400px",
            height: "600px",
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
            Sign Up
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
            onSubmit={handleSubmitRegister}
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <TextField
              onChange={handleInputChange}
              value={values.name}
              name="name"
              id="outlined-basic"
              label="username"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              value={values.key}
              name="key"
              id="outlined-basic"
              label="key"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              name="email"
              value={values.email}
              id="email"
              label="Your email"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              name="secret"
              value={values.password}
              id="password"
              label="Your password"
              variant="outlined"
            />

            <Button
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#6200EE",
                ":hover": {
                  backgroundColor: "#fff",
                  color: "#6200EE",
                  border: "2px solid #6200EE",
                },
              }}
              type="submit"
            >
              Button
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already signed up ?{" "}
              <Link style={{ color: "blue" }}>Go to sign in.</Link>
            </Typography>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
