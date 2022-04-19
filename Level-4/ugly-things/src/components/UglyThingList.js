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
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    setThingList(thingList.filter(thing => (thing._id !== id)))
  }
  
  // PUT REQUEST PASSED AS PROP TO THING COMPONENET
  function handleEdit(id, newInput) {
    let updates = {
      title: newInput.title,
      description: newInput.description
    }
    axios.put(`https://api.vschool.io/Jeff/thing/${id}`, updates)
        .then(res => {
          console.log(res.data)
          setThingList(prevState => prevState.map(thing => (thing._id === id ? 
            {...thing, title: newInput.title, description: newInput.description} : thing )))
        })
        .catch(err => console.log(err))
  }
  
  // MAPS THROUGH THINGlIST AND PASSES PROPS
  const thingElements = thingList.map((element, i) => {
      return <Thing {...element} 
                    key={i} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                    />
  })

  return (
    <div className='ugly-thing-list'>
        {thingElements}
    </div>
  )
}

export default React.memo(UglyThingList)