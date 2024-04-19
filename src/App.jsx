import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import Dashboard from './page/Dashboard';
import { SendMoney } from './page/Send';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
