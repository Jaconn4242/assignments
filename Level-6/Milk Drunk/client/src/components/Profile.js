import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { MainContext } from '../context/ContextProvider';
import AddImage from "../images/AddImage.png"
import MenuIcon from "../images/MenuIcon.png"
import "../styles/Profile.css"
import Trackers from './Trackers';
// import UserBaby from './UserBaby';
// disadvantage getting entire list of babies)how much, how often, how redundant
// less network traffic mindset!
// 
export default function Profile() {

  const navigate = useNavigate()

  const {
    user: {
      username,
    },
    baby,
    getUserBabies,
  } = useContext(MainContext)

  useEffect(() => {
    getUserBabies()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h2 className='profile-header'>Welcome back {username}!</h2>
      
        {baby.map(child => {
          return <div key={child._id} className='profile'>
            <img src={child.babyImg} onClick={() => navigate(`/babydetails/${child._id}`)} alt="" className='baby-image' width={200} />
            <div key={child._id} className='baby-info-box'>

              <p>{child.babyname.charAt(0).toUpperCase() + child.babyname.slice(1)}</p>
              <p>Age:</p>
            </div>
          </div>
        })} 
      <div className='default-image-container'>
      <img className='default-image' 
        src={AddImage} 
        alt="add-baby-image"
        onClick={()=>navigate("/addbabyform")}
        />
      </div>
    </>
  )
}