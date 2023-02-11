import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Details = (props) => {
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "User id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "userName", headerName: "User Name", width: 150 },
    { field: "email", headerName: "E-mail", width: 150 },
  ];

  let rows;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Details :: props >>> ', props);
    if (!props.globalState.loggedIn){
      return navigate("/login");
    }
    console.log('Details :: loggedIn >>> ', props.globalState.loggedIn);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <h1>Details</h1>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid rows={users} columns={columns} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
