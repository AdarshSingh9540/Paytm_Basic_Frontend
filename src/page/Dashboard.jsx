import React, { useState,useEffect } from 'react'
import { Appbar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'

function Dashboard() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`https://paytm-basic-backend.vercel.app/api/v1/user/bulk`)
      .then(response => {
        setUserData(response.data.user);
        console.log(response);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);
  
  return (
    <div>
        <Appbar name={userData} />
        <div className=''>
            <Balance value={"10,0000"} />
          <Users/>
        </div>
    </div>
  )
}

export default Dashboard