import React from "react"
import {Route, Navigate} from "react-router-dom"

import React from 'react'

export default function ProtectedRoute(props) {
    const {path, navigate, component: C, token, ...rest} = props

  return ( token ? 
    <Route path={path} render={()=> <C {...rest}/>} />:
    <Navigate to={navigate} />
  )
}
