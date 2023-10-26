import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom';
import {CustomButton} from './'
import {logo , menu ,search , thirdweb} from '../assets'
import { navlinks } from '../constants';
import { useStateContext } from '../context';

const NavBar = () => {
  const navigate = useNavigate();
  const [isActive , setIsActive] = useState('dashboard');
  const [toggledrawer , setToggleDrawer] = useState(false);
  // const address = '0xssaw'
  const {address , connect} = useStateContext();
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input placeholder='enter the campaign name' type='text' className='bg-[#1c1c24]font-normal text-[14px]  outline-none bg-transparent text-white placeholder:text-[#4b5264] w-ful flex font-epilogue' />
<div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
<img src={search} alt='search' className='w-[15px] h-[15px] object-contain'/>
</div>
      </div>
<div className='sm:flex hidden flex-row justify-end gap-4 '>
<CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
/>
<Link to='/profile'>
<div className='w-[52px] h-[52px] bg-[#2c2f32] flex justify-center items-center rounded-full cursor-pointer'>
  <img src={thirdweb} className='w-[60%] object-contain h-[60%]' alt='user'/>
</div>
</Link>
</div>

{/* small screen navigation */}
<div className='sm:hidden flex justify-between items-center relative'>
<div className='w-[40px] h-[40px] bg-[#2c2f32] flex justify-center items-center rounded-[10px] cursor-pointer'>
  <img src={logo} className='w-[60%] object-contain h-[60%]' alt='user'/>
</div>
<img src={menu} alt='menu' className='w-[34px] h-[34px] object-contain cursor-pointer' onClick={()=>setToggleDrawer((prev) => !prev)}/>
<div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggledrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
  <ul className='mb-4'>
  {navlinks.map((link)=>(
        <li
        key={link.name}
        className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]' }`}
        {...link}

        isActive={isActive}
        onClick={()=>{
          setToggleDrawer(false)
                setIsActive(link.name)
                navigate(link.link)
            
        }}
        >
          <img src={link.imgurl}
          alt={link.name}
          className={`w-[24px] h-[24px] object-contain ${isActive === link.name ?'grayscale-0': 'grayscale'}`}
          />
          <p className={`font-epilogue ml-[20px] font-semibold text-[14px] ${isActive=== link.name ? 
          'text-[#1dc071]' : 'text-[#808191]'}`}>
            {link.name}
          </p>
          </li>
    ))}
  </ul>
  <div className='flex mx-4'>

  <CustomButton 
btnType="button"
title={address ? 'Create a campaign' : 'Connect'}
styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
handleClick={() =>{
  if(address) navigate('create-campaign')
  else connect()
}}
/>
  </div>

</div>

</div>
    </div>
  )
}

export default NavBar