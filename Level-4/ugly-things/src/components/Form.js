import React, {useState, useContext} from "react"
import { MainContext } from "../MainProvider"
import "./Form.css"


function Form(props) {
    // FROM PROVIDER
    const {thingList, setThingList} = useContext(MainContext)


    // USESTATE FOR THING
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
    // SUBMIT TO ARRAY IN PROVIDER
    function handleSubmit (e){
        e.preventDefault()
        setThingList(prevState => ([...prevState, thing]))
        setThing({
            title: "",
            description: "",
            imgUrl: ""
        })
    }

    console.log(thing)

  return (
    <>
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
                name="description"
                value={thing.description}
                onChange={handleChange}
        />
        <input type="text"
                placeholder="Description"
                className="imgUrl input"
                name="imgUrl"
                value={thing.imgUrl}
                onChange={handleChange}
        />
        <button className="form-submit-button">Submit</button>
    </form>
    </>
  )
}

export default Form