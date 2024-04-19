import React from 'react'

function Button({label, onClick}) {
  return (
    <div>
         <button onClick={onClick} className='w-full bg-black text-white p-2 my-4 rounded-md'>{label}</button>
    </div>
  )
}

export default Button;