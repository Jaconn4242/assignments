import React, {useContext} from 'react'
import "./UglyThingList.css"
import { MainContext } from "../MainProvider"
import Thing from "./Thing"


function UglyThingList(props) {
    // FROM PROVIDER
    const {thingList, updateThingList} = useContext(MainContext)

    console.log(thingList)
    const thingElements = thingList.map((element, i) => {
        return <Thing {...element} key={i}/>
    })
  return (
    <div className='ugly-thing-list'>
        {thingElements}
        {/* I want the code above to work */}
    </div>
  )
}

export default UglyThingList