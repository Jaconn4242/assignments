import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { MainContext } from '../context/ContextProvider';
import AddImage from "../images/AddImage.png"
import "../styles/Profile.css"
import Trackers from './Trackers';
// import UserBaby from './UserBaby';

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
      <div className='profile'>
        {baby.map(child => {
          if (child.babyImg) {
            return <div key={child._id} className='profile-section1'>
              <img src={child.babyImg} alt="" className='baby-image' width={200} />
            </div>
          } else {
            return <div key={child._id} className='profile-section1'>
              <p>Add Baby Info</p>
              <img src={AddImage} alt="" onClick={() => navigate("/babyprofile")} />
            </div>
          }
        })}
        {baby.map(child => <div key={child._id} className='baby-info-box'>
          
          <p>{child.babyname.charAt(0).toUpperCase() + child.babyname.slice(1)}</p>
          <p>Age:</p>
        </div>
        )}
      </div>
      <Trackers />
    </>
  )
}