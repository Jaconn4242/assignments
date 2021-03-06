import React, {useState, useContext} from "react"
import { MainContext } from "../MainProvider"
import axios from "axios"
import "./Form.css"


function Form(props) {
    // FROM PROVIDER
    const {setThingList} = useContext(MainContext)


    //  LOCAL USESTATE FOR THING
    const [thing, setThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    // GRAB VALUE OF INPUTS
    function handleChange(e){
        const {name, value} = e.target
        setThing(prevState => ({...prevState, [name]:value}))
    }
    // SUBMIT TO ARRAY IN PROVIDER AND POST TO API
    function handleSubmit (e){
        e.preventDefault()
        axios.post("https://api.vschool.io/Jeff/thing/", thing)
                .then(res => setThingList(prevState => ([...prevState, res.data])))
                .then(error => console.log(error))

        setThing({
            title: "",
            description: "",
            imgUrl: ""
        })
    }

    console.log("thing:",thing)

  return (
    <>
    <h1 className="main-header">Ugly Things -<h6 className="sub-header"> where venting about ugly things is ok</h6></h1>
    <form className="form" onSubmit={handleSubmit}>
        <input type="text"
                placeholder="Title"
                className="title input"
                name="title"
                value={thing.title}
                onChange={handleChange}
        />
        <input type="text"
                placeholder="ImgUrl"
                className="description input"
                name="imgUrl"
                value={thing.imgUrl}
                onChange={handleChange}
        />
        <input type="text"
                placeholder="Description"
                className="imgUrl input"
                name="description"
                value={thing.description}
                onChange={handleChange}
        />
        <button className="form-submit-button">Submit</button>
    </form>
    </>
  )
}

export default React.memo(Form)