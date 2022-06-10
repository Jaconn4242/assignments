import React, { useState } from 'react'
import "../styles/AddBabyForm.css"

const initInputs = {
    babyname: "",
    gender: "",
    dob: "",
    babyImg: ""
}

export default function AddBabyForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { addBaby, showBaby, setShowBaby } = props

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addBaby(inputs)
        setInputs(initInputs)
        setShowBaby(prevState => !prevState)
        console.log(showBaby)
    }

    const { babyname, gender, babyImg, dob } = inputs
    return (
        <div className='baby-form-wrapper'>
            <form className='baby-form-container' onSubmit={handleSubmit}>
                <h3>Baby Info</h3>
                <input
                    type="text"
                    name="babyname"
                    value={babyname}
                    onChange={handleChange}
                    placeholder="Baby Name" />
                <select name="gender" 
                        value={gender}
                        onChange={handleChange}
                        >
                    <option value="reset">Select a Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    type="text"
                    name="babyImg"
                    value={babyImg}
                    onChange={handleChange}
                    placeholder="Baby Image Url" />
                <input
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={handleChange}
                    placeholder="Date of Birth" />
                <button>Submit Information</button>
            </form>
        </div>
    )
}