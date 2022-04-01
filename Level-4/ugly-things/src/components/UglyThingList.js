import React, {useContext} from 'react'
import { MainContext } from "../MainProvider"
import "./UglyThingList.css"
import axios from 'axios'
import Thing from "./Thing"


function UglyThingList(props) {
  
  
  // FROM PROVIDER
  const {thingList, setThingList} = useContext(MainContext)

    // DELETE REQUEST PASSED AS PROP TO THING COMPONENT
    function handleDelete(id) {
      axios.delete(`https://api.vschool.io/Jeff/thing/${id}`)
          .then(res => console.log("response.data" + res.data))
          .catch(err => console.log(err))
      setThingList(thingList.filter(thing => (thing._id !== id)))
      }
  
    console.log(thingList)
    const thingElements = thingList.map((element, i) => {
        return <Thing {...element} key={i} handleDelete={handleDelete}/>
    })
  return (
    <div className='ugly-thing-list'>
        {thingElements}
    </div>
  )
}

export default React.memo(UglyThingList)