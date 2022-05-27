import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    aircraft: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [allAircraft, setAllAircraft]= useState([])

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserAircraft()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      aircraft: []
    })
  }

  function handleAuthError(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }
  function getAllAircraft(){
    userAxios.get("/api/aircraft")
      .then(res => setAllAircraft(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getUserAircraft(){
    userAxios.get("/api/aircraft/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          aircraft: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addAircraft(newAircraft){
    userAxios.post("/api/aircraft", newAircraft)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          aircraft: [...prevState.aircraft, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //eslint-disable-next-line
  function getComments(){
    userAxios.get("/api/aircraft/comments")
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addAircraft,
        resetAuthErr,
        getAllAircraft,
        allAircraft,
      }}>
      { props.children }
    </UserContext.Provider>
  )
}