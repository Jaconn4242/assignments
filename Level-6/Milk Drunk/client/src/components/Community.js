import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { MainContext } from '../context/ContextProvider';

function Community() {

  const {getAllBabies, allBabies} = useContext(MainContext)

  useEffect(() => {
    getAllBabies()
    // eslint-disable-next-line
  }, [])
  console.log(allBabies)
  return (
    <div>Community
        <h1>Community Page and Posts!</h1>
        <h3><i>Lets Go!!!</i></h3>
    </div>
  )
}

export default Community