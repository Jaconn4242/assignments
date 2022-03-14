import { element } from 'prop-types'
import React, {useState} from 'react'
import "./ListItems.css"


function ListItems(props) {
    // mapping through the list state from App.js
    const {list} = props
    let listElements =list.map(element => {

        return (
                <li className='Title'>{element} 
                <button className='Editbutton' onClick={editButton}>edit</button>
                <button className='Deletebutton' onClick={deleteButton}>Delete</button>
                </li>
                )
    })


    console.log(listElements)
    // declaring new state
    const [Edit, setEdit] = useState(false)
    const [Delete, setDelete] = useState(false)

    // functions for buttons
   function editButton(e) {
       e.preventDefault()
        setEdit(true)
   }
   function deleteButton(e) {
    e.preventDefault()
    setDelete(true)

    }

    
  return (
    <div className="ListElements">
        {!Edit ? <ol> {listElements}</ol> : 
        <div>
            <input className='edit-input'></input>
            <button>save</button>
        </div>}
    </div>
  )
  }

export default ListItems