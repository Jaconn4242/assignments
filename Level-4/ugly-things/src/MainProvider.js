import React, {useState, useEffect} from "react"
import axios from "axios"

const MainContext = React.createContext()

function MainProvider(props){

    const [thingList, setThingList] = useState([])
    // GET REQUEST SETTING INITIAL STATE VALUE
    useEffect(() =>
    axios.get('https://api.vschool.io/Jeff/thing')
        .then(res => setThingList(res.data))
        .catch(err => console.log(err))
    , [])


    return(
        <MainContext.Provider value=
        {{thingList, setThingList}}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainProvider, MainContext}