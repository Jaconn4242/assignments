import React,{useContext, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { MainContext } from '../context/ContextProvider';
import Trackers from './Trackers';
import "../styles/BabyDetails.css"

function BabyDetails() {

    const {baby, getUserBabies} = useContext(MainContext)

    const params = useParams()
// unidirection render cycle. 
//uni direction cycle - trigger new render if new data
//syncrhonize data to whats on the page
    const foundBaby = baby.find(child => child._id === params.babyId)

    useEffect(() => {
        // this changes state giving two consoles!!! ...loading creation
        getUserBabies()
        // more efficient if I had a getbabytrackerlogs by babyId
        // if there is no baby data and baby does not exist go fetch that baby(efficent practices!)
    }, [])

    //loading text while data is being fetched(state change delay)
    if(!foundBaby){
        return <p>...loading</p>
    }

  return (
    <div className='baby-details-container'>
        <h1>{foundBaby.babyname.charAt(0).toUpperCase() + foundBaby.babyname.slice(1)}</h1>
        
        <Trackers baby={foundBaby}/>
        </div>
  )
}

export default BabyDetails