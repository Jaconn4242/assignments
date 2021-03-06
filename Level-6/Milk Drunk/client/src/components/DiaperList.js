import React, { useContext } from 'react';
import { MainContext } from '../context/ContextProvider';
import "../styles/DiaperList.css"
function DiaperList(props) {

    const { userAxios } = useContext(MainContext)

    const { trackerLogs, setTrackerLogs, getBabyTrackerLogs } = props

    return (
        <>
            {trackerLogs.map(log => {
                if(log.diaperTime){
                return (
                    <div key={log._id} className="log-container" >
                        <p>{log.diaperDate}</p>
                        <p>{log.diaperTime}</p>
                        <p>{log.diaperStatus}</p>
                        <p>{log.diaperNotes}</p>
                        <button className='diaper-button' onClick={() => {
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

export default DiaperList