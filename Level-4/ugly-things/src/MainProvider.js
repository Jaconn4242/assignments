import React, {useState} from "react"

const MainContext = React.createContext()

function MainProvider(props){

    const [thingList, setThingList] = useState([])

    return(
        <MainContext.Provider value=
        {{thingList, setThingList}}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainProvider, MainContext}