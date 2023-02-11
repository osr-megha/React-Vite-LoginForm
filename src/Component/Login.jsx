import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import SignUpImg from "./SignUpImg";

const Login = (props) => {
  console.log("Login :: props >>> ", props);

  const navigate = useNavigate();

  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { name, value } = e.target;
    console.log(value, name);

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("user");
    const { name, number, email, password } = inpVal;
    if (email === "" && password === "") {
      alert("please fill all the required details");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password.length < 5) {
      alert("password length must be greater than 5");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        console.log(userData);
        const userLogin = userData.filter((el, ind) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid details, please check");
        } else {
          console.log("User Login Successfull");
          props.setGlobalState({ ...props.globalState, loggedIn: true });
          navigate("/detail");
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <section style={{ display: "flex" }}>
          <div className="left-data">
            <h3>Sign In</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 5,
                  width: "300px",
                  display: "flex",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                name="email"
                value={inpVal.email}
                id="outlined-email"
                label="Email"
                type="email"
                onChange={getData}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                name="password"
                value={inpVal.password}
                id="outlined-password-input"
                label="Password"
                type="password"
                onChange={getData}
                autoComplete="current-password"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ width: "300px", marginLeft: "40px" }}
              onClick={addData}
            >
              Submit
            </Button>
            <p style={{ marginTop: "30px", marginLeft: "40px" }}>
              Create an Account
              <span>
                <NavLink to="/">Sign Up</NavLink>
              </span>
            </p>
          </div>
          <SignUpImg />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Login;
