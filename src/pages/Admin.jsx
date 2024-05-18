import React, { useEffect, useState } from 'react'

function Admin() {
    const[meetings,setMeetings]=useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))

    },[])
  return (
    <div>Admin</div>
  )
}

export default Admin