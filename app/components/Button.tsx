import React from 'react'

interface ButtonProps{
  btnText: string;
  btnAction: () => void;
  btnColor: string;
}

const Button = ({btnText,btnAction,btnColor} : ButtonProps) => {
  return (
    <button className='btn-basic' style={btnColor === "dark" ? {color: "#20FC8F",backgroundColor: "#2D2D2A",border: "1px solid #20FC8F"} : {color: "#2D2D2A",backgroundColor: "#20FC8F",border: "2px solid #2D2D2A"}} onClick={() => btnAction()}>
      {btnText}
      </button>
  )
}

export default Button