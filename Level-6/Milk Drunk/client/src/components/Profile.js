import React, { useContext, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { MainContext } from '../context/ContextProvider';
import AddImage from "../images/AddImage.png"
import "../styles/Profile.css"
// import UserBaby from './UserBaby';

export default function Profile(){

const navigate = useNavigate()

  const { 
    user: { 
      username,
    },
    showBaby, 
    setShowBaby,
    baby,
    getUserBabies,
  } = useContext(MainContext)

  useEffect(()=> {
    getUserBabies()
    // eslint-disable-next-line
  }, [])

 const babyelements = baby.map(child => {
   return <img src={child.babyImg} width={300} height={160}/>
 })
  return(
    <>
    <div className='profile'>
      <div className='profile-section1'>
        <p>Add Baby Info</p>
        {babyelements}
    </div>
      <h1>{`Welcome ${username}`}</h1>
    </div>
    </>
  )
}