import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainContext } from './context/ContextProvider';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import NotMember from './components/NotMember';
import Auth from './components/Auth';
import ErrorPage from './components/ErrorPage';
import Public from './components/Public';
import Greeting from './components/Greeting';
import Community from './components/Community';
import DiaperForm from './components/DiaperForm';
import './styles/App.css';
import BabyDetails from './components/BabyDetails';
import AddBabyForm from './components/AddBabyForm';

function App() {
  const {token, logout} = useContext(MainContext)
  return (
    <div className="App"> 
    <Routes>
      <Route 
        path="/" 
        element= {token ? <Navigate to="/profile"/>:<Greeting />} 
      />
      <Route 
        path="/Auth" 
        element={<Auth token={token}/>}
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
        path="/community"
        element={token ? <Community />: <NotMember/>}
      />
      <Route 
        path="/addbabyform"
        element={token ? <AddBabyForm />: <NotMember/>}
      />
      <Route 
        path="/diaperform/:babyId"
        element={token ? <DiaperForm />: <NotMember/>}
      />
      <Route 
        path="/babydetails/:babyId"
        element= {token ? <BabyDetails />: <NotMember/>}
        // render = {(props)=> {console.log(props)}}
      />
      <Route 
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
    <NavBar logout={logout} token={token} /> 
    </div>
  );
}

export default App;
