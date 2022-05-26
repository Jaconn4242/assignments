import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import NotMember from './components/NotMember.js'
import ErrorPage from './components/ErrorPage.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={token ? <Profile />: <NotMember/>}
        />
        <Route 
          path="/public"
          element={token ? <Public />: <NotMember/>}
        />
        <Route 
          path="*"
          element={<ErrorPage/>}
        />
      </Routes>
    </div>
  )
}
