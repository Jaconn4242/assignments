import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainContext } from './context/ContextProvider';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import NotMember from './components/NotMember';
import Auth from './components/Auth';
import ErrorPage from './components/ErrorPage';
import Public from './components/Public';
import './styles/App.css';
import Greeting from './components/Greeting';
import Footer from './components/Footer';

function App() {
  const {token, logout} = useContext(MainContext)
  return (
    <div className="App">
    <NavBar logout={logout} token={token} />  
    <Routes>
      <Route 
        path="/" 
        element= {token ? <Navigate to="/profile"/>:<Greeting />} 
      />
      <Route 
        path="/Auth" 
        element={token ? <Auth />: <NotMember />}
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
        element={<ErrorPage />}
      />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
