import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components';

const Profile = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [campaigns , setCampaigns] = useState([]);
  const {address , contract , getUserCampaign} = useStateContext();

  const fetchCampaign = async () => {
    setIsLoading(true);
   const data = await getUserCampaign();
   setCampaigns(data);
   setIsLoading(false);
  }
  useEffect(()=> {
    if(contract)
    fetchCampaign()
  },[address , contract])

  return (
   <DisplayCampaigns
   title ="All Campaigns"
   isLoading={isLoading}
   campaigns={campaigns}
   />
  )
}

export default Profile