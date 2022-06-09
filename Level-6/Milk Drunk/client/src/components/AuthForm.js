import React from 'react'
import "../styles/AuthForm.css"

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      username, 
      password,
      email
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
        <input 
        type="text" 
        value={email} 
        name="email"
        onChange={handleChange} 
        placeholder="Email Address"/>
      <button>{ btnText }</button>
      <p style={{color: "red"}}>{errMsg}</p>
    </form>
  )
}