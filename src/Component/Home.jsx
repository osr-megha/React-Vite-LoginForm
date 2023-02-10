import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import '../App.css'
import SignUpImg from "./SignUpImg";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [inpVal, setInpVal] = useState({
        name:"",
        number:"",
        email:"",
        password:"",
    })

    const [data, setData] = useState([]);

    const getData = (e) => {
        // console.log(e.target.value);

        const {name, value} = e.target;
        console.log(value, name);

        setInpVal(()=>{
            return{
                ...inpVal, 
                [name]:value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        // console.log(inpVal);
        const {name, number, email, password} = inpVal;

        if(name === "" && email ==="" && number === "" && password === "") {
            alert("please fill all the required details");
        } else if(!email.includes("@")){
            alert("please enter valid email address");
        } else if (password.length < 5){
            alert("password length must be greater than 5");
        } else{
            console.log("data added successfully");

            localStorage.setItem("user", JSON.stringify([...data,inpVal])); 
            navigate("/login");
        }
    }


  return (
    <React.Fragment>
      <div className="container">
        <section style={{display:"flex" }}>
          <div className="left-data">
            <h3>Sign Up</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 5, width: "300px", display:"flex" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                name="name"
                value={inpVal.name}
                id="outlined-required"
                label="Name"
                type="name"
                onChange={getData}
                InputLabelProps={{
                    shrink: true,
                  }}
              />
              <TextField
              required
                name="number"
                value={inpVal.number}
                id="outlined-number"
                label="Number"
                type="number"
                onChange={getData}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
            <Button variant="contained" sx={{width:"300px", marginLeft:"40px"}} onClick={addData}>Submit</Button>
                  <p style={{marginTop:"30px", marginLeft:"40px"}}>Already have an Account <span> <NavLink to="/login">SignIn</NavLink></span></p>
            </div>
          <SignUpImg/>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
