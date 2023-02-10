import React, { useEffect, useState } from 'react'
import "../App.css"
import { DataGrid } from '@mui/x-data-grid';


const Details = () => {
  const columns = [
    {field:"id", headerName:"User id", width:150},
    {field:"name", headerName:"Name", width:150},
    {field:"userName", headerName:"User Name", width:150},
    {field:"email", headerName:"E-mail", width:150},
  ]

  let rows;

  const [users, setUsers] = useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
      }, [])

  return (
    <React.Fragment>
    <div className='container'>
    <h1>Details</h1>

    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={users} columns={columns} />
    </div>
   
    </div>
    </React.Fragment>
  )
}

export default Details