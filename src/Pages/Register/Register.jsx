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
import PurpleButton from "../../Components/Buttons/PurpleButton/Purplebutton";
import ContinueButton from "../../Components/Buttons/ContinueButton";
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
      if (values.name.length < 2) {
        toast("name must contain at least 2 letters", { type: "info" });
      } else if (values.email < 7) {
        toast("email must contain at least 3 letters", { type: "info" });
      } else if (values.key < 6) {
        toast("username must contain at least 6 letters", { type: "info" });
      } else if (values.secret < 4) {
        toast("Secret key must contain at least 6 letters", { type: "info" });
      } else {
        const { data } = await auth_api.register(values);
        if (data?.isOk === true) {
          toast("Success registered", { type: "success" });
          localStorage.setItem("Key", data.data.key);
          localStorage.setItem("SecretKey", data.data.secret);
          location.replace("/");
        }
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
            padding: "1.5rem 1.3rem",
            width: {xs: "270px" , lg: "400px" , sm: "300px" ,  },
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
              required
              label="name"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              value={values.key}
              name="key"
              id="outlined-basic"
              label="Username"
              required
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              name="email"
              value={values.email}
              id="email"
              type="email"
              required
              label="Your email"
              variant="outlined"
            />
            <TextField
              onChange={handleInputChange}
              name="secret"
              value={values.password}
              id="password"
              type="password"
              required
              label="Your password"
              variant="outlined"
            />

            <PurpleButton type="submit">SUBMIT</PurpleButton>
            <Typography sx={{ textAlign: "center" }}>
              Already signed up ?{" "}
              <Link to="/login" style={{ color: "blue" }}>
                Go to sign in.
              </Link>
            </Typography>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
