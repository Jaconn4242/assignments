import React from "react"

const MainContext = React.useContext()

const ContextProvider = (props)=> {

    return(
        <MainContext.Provider value={{

        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {ContextProvider, MainContext}
