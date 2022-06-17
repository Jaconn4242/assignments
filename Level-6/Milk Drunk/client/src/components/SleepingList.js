import React, { useContext } from 'react';
import { MainContext } from '../context/ContextProvider';
import "../styles/SleepingList.css"

function SleepingList(props) {

    const { userAxios } = useContext(MainContext)

    const { trackerLogs, getBabyTrackerLogs } = props

    return (
        <>
            {trackerLogs.map(log => {
                if(log.sleepingStart){
                return (
                    <div key={log._id} className="log-container" >
                        <p>{log.sleepingDate}</p>
                        <p>{log.sleepingStart}</p>
                        <p>{log.sleepingEnd}</p>
                        <p>{log.sleepingNotes}</p>
                        <button className='feeding-button' onClick={() => {
                            userAxios.delete(`/api/baby/trackerLogs/${log.baby}/trackerLogs/${log._id}`)
                                .then(res => {
                                    // setTrackerLogs(prevLogs => prevLogs.filter(item => (item._id !== res.data._id )))
                                    getBabyTrackerLogs()
                                    console.log(res.data)
                                    alert(`Successfully deleted the Log`)
                                })
                                .catch(err => console.log(err))
                        }}>Delete Log</button>
                    </div>
                )} 
            })}
        </>
    )

}

export default SleepingList