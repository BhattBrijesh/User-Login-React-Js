import { Button, Grid2, Paper, TextField } from "@mui/material";
import "../login.scss";
import React, { useState } from "react";
import {
  handleCreateUser,
  handleUserLogin,
} from "../../../Components/Functions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [loginFormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobTitle: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
    setSignUpFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSignupBtn = (e) => {
    const btnId = e.target.id;
    if (btnId === "Create") {
      postUserData();
    } else {
      setIsUserLogin(false);
    }
  };
  const handleLoginBtn = async (e) => {
    const btnId = e.target.id;
    if (btnId === "Login") {
      handleLogin();
    } else {
      setIsUserLogin(true);
    }
  };
  const postUserData = async () => {
    const res = await handleCreateUser(signUpFormData);
    if (res?.data?.message === "User Created Successfully") {
      toast.success(res?.data?.message);
      setIsUserLogin(true);
    }
  };

  function handleValidateDetails() {
    const { email, password } = loginFormData;
    if (email?.trim()?.length && password?.trim()?.length) {
      return true;
    } else {
      toast.error("fill details first");
      return false;
    }
  }
  const handleLogin = async () => {
    if (handleValidateDetails()) {
      const res = await handleUserLogin(loginFormData);
      const { message } = res?.data || {};
      if (message === "login successfully") {
        toast.success(message);
        navigate("/userData");
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <Grid2 container className="login-grid-container">
      <Grid2 item sm={12} className="login-grid-1">
        <Grid2
          component={Paper}
          elevation={3}
          container
          spacing={3}
          className="login-grid-2"
          xs={12}
        >
          {isUserLogin && (
            <React.Fragment>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="password"
                  label="Password"
                  variant="outlined"
                  // type="password"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
            </React.Fragment>
          )}
          {!isUserLogin && (
            <React.Fragment>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
              <Grid2 sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  name="jobTitle"
                  label="Job Title"
                  variant="outlined"
                  size="small"
                  onChange={handleInputChange}
                />
              </Grid2>
            </React.Fragment>
          )}
          <Grid2
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              id={!isUserLogin ? "Create" : "Signup"}
              variant="outlined"
              sx={{ textTransform: "none" }}
              onClick={handleSignupBtn}
            >
              {!isUserLogin ? "Create" : "Signup"}
            </Button>
            <Button
              id={isUserLogin ? "Login" : "Back"}
              variant="contained"
              sx={{ marginLeft: "1rem", textTransform: "none" }}
              onClick={handleLoginBtn}
            >
              {isUserLogin ? "Login" : "Back"}
            </Button>
          </Grid2>
        </Grid2>
        <Button>Get Product data</Button>
      </Grid2>
    </Grid2>
  );
}
export default Login;
