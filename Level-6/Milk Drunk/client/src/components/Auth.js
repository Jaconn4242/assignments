import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { MainContext } from '../context/ContextProvider';
import "../styles/Auth.css"

const initInputs = { username: "", password: "" }

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(MainContext)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }

  function toggleform() {
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className='auth-container'>
      <div className="form-container">
        <h1>Milk Drunk</h1>
        {!toggle ?
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up"
              errMsg={errMsg}
            />
            <p onClick={toggleform}>Already a member?</p>
          </>
          :
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
            />
            <p onClick={toggleform}>Not a member?</p>
          </>
        }
      </div>
    </div>
  )
}