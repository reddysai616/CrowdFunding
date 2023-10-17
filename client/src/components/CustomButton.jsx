import React from 'react'

const CustomButton = ({btnType , styles,handleClick , title}) => {
  return (
   <button 
   type={btnType}
    className={` font-epilogue font-semibold text-[16px] leading-6 text-white rounded-xl${styles}`}
    onclick={handleClick}
   >
    {title}
   </button>
  )
}

export default CustomButton