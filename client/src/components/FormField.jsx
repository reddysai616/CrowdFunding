import React from 'react'

const FormField = ({inputType , placeholder , LableName , isTextArea , value ,handleChange}) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {LableName && (
            <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{LableName}</span>
        )}
{isTextArea ? (

<textarea

rows={10}
placeholder={placeholder}
required
onChange={handleChange}
value={value}
className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
/>)
 : (
    <input
    type={inputType}
    step="0.1"
    placeholder={placeholder}
    required
    onChange={handleChange}
    value={value}
    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
    />
) }
    </label>
  )
}

export default FormField