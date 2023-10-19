import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {ethers} from 'ethers'
import { money } from '../assets'
import { CustomButton , FormField } from '../components'
import {checkIfImage} from '../utils'
const CreateCampaign = () => {

  const navigate =  useNavigate();
  const [isLoading , setIsLoading]  = useState(false);
  const [form , setForm] = useState({
    name : '',
    title:'',
    description:' ',
    target:'',
    deadline:'',
    image:'',

  });
  const handleFormFieldChange = (fieldName , e)=>{
    setForm({ ...form , [fieldName]: e.target.value})

  }
  const handleSubmit= async (e) => {
    e.preventDefault();
    console.log(form)
    
  }

 
  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loading...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a campaign</h1>
      </div>
      
<form className='w-full mt-[65px] flex flex-col gap-[30px]' onSubmit={handleSubmit}>
<div className='flex flex-wrap gap-[40px]'>
<FormField 
LableName = "Your Name *"
placeholder="Sai Kiran"
inputType="text"
value={form.name}
handleChange={(e)=> handleFormFieldChange('name' , e)}
/>
<FormField
LableName = "Your Title *"
placeholder="Sai Kiran"
inputType="text"
value={form.title}

handleChange={(e)=> handleFormFieldChange('title' , e)}

/>
</div>
<FormField
LableName = "Story Title *"
placeholder="Write your story"
isTextArea
value={form.description}
handleChange={(e)=> handleFormFieldChange('description' , e)}

/>

<div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]'>
  <img src={money} alt='money' className='object-contain h-[40px] w-[40px'/>
  <h4 className='] font-epilogue font-bold text-[25px] mr-[20px] text-white'>
You will get 100% of raised amount
  </h4>
</div>
<div className='flex flex-wrap gap-[40px]'>
<FormField 
LableName = "Goal *"
placeholder="ETH 0.50"
inputType="text"
value={form.target}
handleChange={(e)=> handleFormFieldChange('target' , e)}

/>
<FormField
LableName = "End Date *"
placeholder="End Date"
inputType="date"
value={form.deadline}
handleChange={(e)=> handleFormFieldChange('deadline' , e)}

/>
<FormField
LableName = "Campaign Image *"
placeholder="Paste your image url"
inputType="url"
value={form.image}
handleChange={(e)=> handleFormFieldChange('image' , e)}

/>

</div>
<div className='flex justify-center items-center mt-[40px]'>
  <CustomButton
  btnType='submit'
  title="sunmit campaign"
  styles="bg-[#1dc071]"
  />

</div>

</form>
    </div>
  )
}

export default CreateCampaign