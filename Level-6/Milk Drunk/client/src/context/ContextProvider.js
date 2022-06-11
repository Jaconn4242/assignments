import React, {useState} from "react"
import axios from "axios"


export const MainContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ContextProvider (props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        baby: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allBabies, setAllBabies] = useState([])
    //local state for baby profile pic
    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getAllBabies()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            baby: []
        })
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }
    
    function getAllBabies(){
        userAxios.get("/api/baby")
        .then(res => setAllBabies(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }


    function getUserBabies(){
        userAxios.get("/api/baby/parent")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                baby: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addBaby(newBaby){
        userAxios.post("api/baby", newBaby)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                baby: [...prevState.baby, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteUserBaby(babyId){
        userAxios.delete(`/api/aircraft/${babyId}`)
        .then(res => console.log(res))
        .catch(err => console.log(err.response.data.errMsg))
    }

    //NEEDS WORK!
    // function updateUserBaby(babyId, updates){
    //     userAxios.put(`/api/baby/${babyId}`)
    //     .then(res => {
    //         setUserState(prevState => ({
    //             ...prevState,
    //             baby: baby.map(child => (child._id === babyId ? res.data : child))
    //         }))
    //     })
    // }

    // function newGetComments(aircraftId){
    //     userAxios.get(`api/aircraft/comments/${aircraftId}/comments`)
    //  .then(res => setAircraftComments(res.data))
    //  .catch(err => console.log(err.response.data.errMsg))
    //  }

    //  function addAircraftComment(aircraftId, newComment){
    //     userAxios.post(`api/aircraft/comments/${aircraftId}/comments`, newComment)
    //     .then(res => setAircraftComments(prevState => [...prevState, res.data]))
    //     .catch(err => console.log(err.response.data.errMsg))
    //   } 
    return(
        <MainContext.Provider value={{
            userAxios,
            allBabies,
            ...userState,
            signup,
            login,
            logout,
            addBaby,
            resetAuthErr,
            getAllBabies,
            getUserBabies,
            deleteUserBaby,
            // updateUserBaby
        }}>
            {props.children}
        </MainContext.Provider>
    )
}


