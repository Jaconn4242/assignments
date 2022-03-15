import React, {useState} from 'react'
import "./Card.css"
import Preview from "./Preview"

function Card() {
    // state defined below
    const [showPreview, setShowPreview] = useState(false)
    const [badgeData, setBadgeData] = useState([])
    const [cardData, setCardData] = useState(
        {
            firstName: "",
            lastName: "",
            year: "",
            make: "",
            model: "",
            email: "",
            comments: ""
        })
    console.log("card data", cardData)
    // on change function below
    const handleChange = e => {
        const {name, value} = e.target
        setCardData(prevState => {
            return {...prevState, [name]:value}
        })
    }
    // on submit function below
    const handleSubmit = e => {
        e.preventDefault()
        setBadgeData(cardData)
        setShowPreview(true)
        console.log("badge data",badgeData)
    }

  return (
    <>
    <h1 className='Form--title'>Let's build your preview!</h1>
    <form className='Form--container' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='*First name'
            value={cardData.firstName}
            name="firstName"
            onChange={handleChange}
             />
             <input 
            type="text" 
            placeholder='*Last name'
            value={cardData.lastName}
            name="lastName"
            onChange={handleChange}
             />
             <input 
            type="text" 
            placeholder='*Year'
            value={cardData.year}
            name="year"
            onChange={handleChange}
             />
             <input 
            type="text" 
            placeholder='*Make'
            value={cardData.make}
            name="make"
            onChange={handleChange}
             />
             <input 
            type="text" 
            placeholder='*Model'
            value={cardData.model}
            name="model"
            onChange={handleChange}
             />
             <input 
            type="email" 
            placeholder='*Email'
            value={cardData.email}
            name="email"
            onChange={handleChange}
             />
       
        <textarea 
            placeholder='Enter comments...'
            value={cardData.comments}
            name="comments"
            onChange={handleChange}
            className='comments'
            type="text"
            />
        <button>View Preview</button>
    </form>
    {showPreview && <Preview data={badgeData} key={badgeData.firstName}/>}
    </>
  )
}

export default Card