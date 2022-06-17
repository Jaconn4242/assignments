import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/ContextProvider';
import { useNavigate, useParams } from "react-router-dom"
import "../styles/SleepingForm.css"
import SleepingList from './SleepingList';

function SleepingForm() {

    const params = useParams()

    const initInputs = {
        sleepingDate: "",
        sleepingStart: "",
        sleepingEnd: "",
        sleepingNotes: ""
    }
    const { userAxios, getUserBabies, baby } = useContext(MainContext)
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

    function addTrackerLog(inputs) {
        userAxios.post(`/api/baby/trackerLogs/${params.babyId}/trackerLogs`, inputs)
            .then(res => setTrackerLogs(prevState => [...prevState, res.data]))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTrackerLog(inputs)
        setInputs(initInputs)
        // navigate("/profile")
    }

    useEffect(() => {
        getUserBabies()
        getBabyTrackerLogs()
        // eslint-disable-next-line
    }, [])

    function getBabyTrackerLogs(realId) {
        userAxios.get(`/api/baby/trackerLogs/${params.babyId}/trackerLogs`)
            .then(res => setTrackerLogs(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    const { sleepingDate, sleepingStart, sleepingEnd, sleepingNotes } = inputs
    return (
        <>
            <form className='feeding-form' onSubmit={handleSubmit}>
                <p onClick={() => navigate(-1)} className='back-button'> Back</p>
                <h1>Sleeping Time</h1>
                <label htmlFor="sleepingEnd">Date</label>
                <input type="Date"
                    name="sleepingDate"
                    value={sleepingDate}
                    onChange={handleChange}
                />
                <label htmlFor="sleepingStart">Start</label>
                <input type="Time"
                    name="sleepingStart"
                    value={sleepingStart}
                    onChange={handleChange}
                />
                <label htmlFor="sleepingEnd">End</label>
                <input type="Time"
                       name="sleepingEnd" 
                       value={sleepingEnd}
                       onChange={handleChange}
                       placeholder="oz." 
                        />
                <textarea className='notes-container'
                    placeholder='Additional notes... '
                    name="sleepingNotes"
                    value={sleepingNotes}
                    onChange={handleChange}
                ></textarea>
                <button>Submit</button>
            </form>
            <SleepingList trackerLogs={trackerLogs}
                setTrackerLogs={setTrackerLogs}
                baby={baby}
                getBabyTrackerLogs={getBabyTrackerLogs}
            />
        </>
    )
}

export default SleepingForm