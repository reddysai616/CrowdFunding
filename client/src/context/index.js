import { ethers } from "ethers";
import React , {useContext , createContext} from "react";
import {useAddress , useContract ,useMetamask , useContractWrite} from '@thirdweb-dev/react'

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    
}