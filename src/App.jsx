import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar, Toolbar } from "@mui/material";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Details from "./Component/Details";

function App() {

  const [globalState, setGlobalState] = useState({ loggedIn: false});
  const passPropsJson = { globalState, setGlobalState };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
        <Toolbar>
          <Header />
        </Toolbar>

        <Routes>
          <Route exact path="/" element={<Home {...passPropsJson}  />} />
          <Route exact path="/login" element={<Login  {...passPropsJson}   />} />
          <Route exact path="/detail" element={<Details  {...passPropsJson}   />} />
        </Routes>
      </AppBar>
    </React.Fragment>
  );
}

export default App;
