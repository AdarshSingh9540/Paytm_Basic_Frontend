// ButtonWarning.js
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonWarning({ label, buttonText, to }) { 
  return (
    <div>
      <div className='py-2 text-sm flex justify-center'>
        {label}
      </div>
      <Link to={to} className='pointer underline pl-1 cursor-pointer'>{buttonText}</Link>
    </div>
  );
}

export default ButtonWarning;
