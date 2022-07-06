import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/ContextProvider';
import { useNavigate, useParams } from "react-router-dom"
import "../styles/DiaperForm.css"
import DiaperList from './DiaperList';

function DiaperForm() {

    const params = useParams()

    const initInputs = {
        diaperDate: "",
        diaperTime: "",
        diaperStatus: "",
        diaperNotes: ""
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

    const { diaperDate, diaperTime, diaperStatus, diaperNotes } = inputs
    return (
        <>
            {/* <button onClick={addTrackerLog}>addtrackerlog</button> */}
            <form className='feeding-form' onSubmit={handleSubmit}>
                <p onClick={() => navigate(-1)} className='back-button'> Back</p>
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
            <DiaperList trackerLogs={trackerLogs}
                setTrackerLogs={setTrackerLogs}
                baby={baby}
                getBabyTrackerLogs={getBabyTrackerLogs}
            />
        </>
    )
}

export default DiaperForm