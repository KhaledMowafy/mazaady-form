import React from 'react'

function Button({text, onClick}) {
  return (
    <div className="w-full flex justify-end">
      <button className="p-3 rounded m-3 bg-black text-white hover:bg-white hover:text-black transition w-1/6" onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
