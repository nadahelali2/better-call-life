import React, { useEffect, useState } from 'react'
import AdminCalendar from './AdminCalendar';

function Admin() {
    const [meetings, setMeetings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
       
          const fetchData = async () => {
            setIsLoading(true); // Set loading state to true
        
            try {
              const response = await fetch("http://127.0.0.1:8000/api/appointments"); // Replace with your endpoint URL
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const data = await response.json();
              setMeetings(data);
            } catch (error) {
              setError(error);
            } finally {
              setIsLoading(false); // Set loading state to false after fetching or error
            }
          };
        
          fetchData();
    },[])

  return (

    <AdminCalendar appointments={meetings} setMeetings={setMeetings}/>

  )
}

export default Admin