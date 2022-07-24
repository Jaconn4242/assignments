import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/ContextProvider';
import {useNavigate} from "react-router-dom"
import "../styles/AddBabyForm.css"

const initInputs = {
    babyname: "",
    gender: "",
    dob: "",
    babyImg: ""
}

export default function AddBabyForm() {
    const {getUserBabies, addBaby} = useContext(MainContext)
    const [inputs, setInputs] = useState(initInputs)
    const navigate = useNavigate()
    

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
        navigate("/profile")
    }
    useEffect(() => {
        getUserBabies()
        // eslint-disable-next-line
    }, [])

    const { babyname, gender, babyImg, dob } = inputs
    return (
        <div className='baby-form-wrapper'>
            <h2 className='add-form-header'>With just a few clicks, track and compare your little one's progress and development</h2>
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
                        className="gender-input"
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
                <button>Add</button>
            </form>
        </div>
    )
}