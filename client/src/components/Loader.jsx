import React from 'react'
import {  loader } from '../assets'

const Loader = () => {
  return (
    <div className='fixed inset-0 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col'>
        <img src={loader} alt="loader" className='w-[100px] h-[100px] object-contain' /> 
        <p className='text-white font-epilogue font-bold text-[20px] text-center'>Please wait...</p>

    </div>
  )
}

export default Loader