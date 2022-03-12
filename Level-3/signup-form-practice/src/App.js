import React, {useState} from "react"

export default function App() {
    
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      okayToEmail: false
    }
  )

  const [submitted, setSubmitted] = useState(false)
    
    function handleChange(e) {
        e.preventDefault()
        const {name, type, value, checked} = e.target
        setFormData(prevFormData => {
            return {
                    ...prevFormData,
                    [name]:type === "checkbox" ? checked : value
                   }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassword && formData.okayToEmail){
            console.log("Successfully signed up")
            console.log("Thanks for signing up for our newsletter")
            setSubmitted(true)
        } else if(formData.password !== formData.confirmPassword){
            console.log("passwords do not match")
        } else {
            console.log("Successfully signed up")
            setSubmitted(true)
        }
    }

    return (
        <div className="form-container" onSubmit={handleSubmit}> 
            {!submitted && <form className="form">
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    required
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        checked={formData.okayToEmail}
                        name="okayToEmail"

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button> 
            </form>}
                {submitted && <h1 style={{color: "white"}}>Thank you! 
                <a style={{color: "white", fontSize: "40px"}} href="./homepage.html">Go to Homepage</a></h1>}
        </div>
    )
}
