import React, { useContext } from 'react';
import { MainContext } from '../context/ContextProvider';
import "../styles/DiaperList.css"
function DiaperList(props) {

    const { userAxios } = useContext(MainContext)

    const { trackerLogs, getBabyTrackerLogs } = props

    return (
        <>
            {trackerLogs.map(log => {
                if(log.feedingTime){
                return (
                    <div key={log._id} className="log-container" >
                        <p>{log.feedingDate}</p>
                        <p>{log.feedingTime}</p>
                        <p>{log.feedingAmount}</p>
                        <p>{log.feedingNotes}</p>
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

export default DiaperList