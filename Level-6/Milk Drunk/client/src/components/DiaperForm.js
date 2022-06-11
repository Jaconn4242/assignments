import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/ContextProvider';
import { useNavigate } from "react-router-dom"
import "../styles/DiaperForm.css"

function FeedingForm() {
    const initInputs = {
        diaperDate: "",
        diaperTime: "",
        diaperStatus: "",
        diaperNotes: ""
    }
    const { userAxios, getUserBabies, user, baby } = useContext(MainContext)
    const [trackerLogs, setTrackerLogs] = useState([])
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

        userAxios.post(`/api/baby/trackerLogs/${baby[0]._id}/trackerLogs`, inputs)
            .then(res => setTrackerLogs(prevState => [...prevState, res.data]))
            .catch(err => console.log(err.response.data.errMsg))
        setInputs(initInputs)
        // navigate("/profile")
    }

    function getBabyTrackerLogs(babyId) {
        userAxios.get(`api/baby/trackerLogs/${babyId}/trackerLogs`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getUserBabies(user._id)
        getBabyTrackerLogs(baby[0]._id)
    }, [])
    const { diaperDate, diaperTime, diaperStatus, diaperNotes } = inputs
    return (
        <>
            <form className='feeding-form' onSubmit={handleSubmit}>
                <h1>Diaper Change</h1>
                <input type="Date"
                    name="diaperDate"
                    value={diaperDate}
                    onChange={handleChange}
                />
                <input type="Time"
                    name="diaperTime"
                    value={diaperTime}
                    onChange={handleChange}
                />
                <div className="radio-toolbar" name="diaperStatus" value={diaperStatus} onChange={handleChange}>
                    <input type="radio" id="radio1" name="diaperStatus" value="wet" />
                    <label htmlFor="radio1">Wet</label>

                    <input type="radio" id="radio2" name="diaperStatus" value="dirty" />
                    <label htmlFor="radio2">Dirty</label>

                    <input type="radio" id="radio3" name="diaperStatus" value="mixed" />
                    <label htmlFor="radio3">Mixed</label>

                    <input type="radio" id="radio4" name="diaperStatus" value="dry" />
                    <label htmlFor="radio4">Dry</label>
                </div>
                <textarea className='notes-container'
                    placeholder='Additional notes... '
                    name="diaperNotes"
                    value={diaperNotes}
                    onChange={handleChange}
                ></textarea>
                <button>Submit</button>
            </form>
            <div>
                {trackerLogs.map(log => <div
                    key={log._id}
                    className="tracker-log-card"
                >
                    <p>{log.diaperDate}</p>
                    <p>{log.diaperTime}</p>
                    <p>{log.diaperStatus}</p>
                    <p>{log.diaperNotes}</p>
                    <p>{log.date}</p>
                </div>)}
            </div>
        </>
    )
}

export default FeedingForm