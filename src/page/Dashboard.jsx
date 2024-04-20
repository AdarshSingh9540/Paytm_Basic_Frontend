import React, { useState, useEffect } from 'react';
import { Appbar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
   
    axios.get(`https://paytm-basic-backend.vercel.app/api/v1/user/bulk`)
      .then(response => {
        setUserData(response.data.user);
        console.log(response);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });

    
    axios.get(`https://paytm-basic-backend.vercel.app/api/v1/account/balance`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => {
        setBalance(response.data.balance);
        console.log(response);
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }, []);

  return (
    <div className='p-4'>
      <Appbar name={userData} />
      <div className='mt-4'>
        <Balance value={balance.toFixed(2)} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
