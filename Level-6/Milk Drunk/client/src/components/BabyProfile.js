import React, {useContext, useEffect} from 'react'
import { MainContext } from '../context/ContextProvider';
import AddBabyForm from './AddBabyForm';

function BabyProfile() {
    const {
        user: {
            username,
        },
        addBaby,
        showBaby,
        setShowBaby,
        baby,
        getUserBabies,
        deleteUserBaby
    } = useContext(MainContext)


    useEffect(() => {
        getUserBabies()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <AddBabyForm addBaby={addBaby} showBaby={showBaby} setShowBaby={setShowBaby}/>
            <h1>Babies Profile</h1>
        </div>
    )
}

export default BabyProfile