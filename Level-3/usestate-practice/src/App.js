import React, {useState} from "react"

export default function App() {

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
  });

const age = 30

function addKvp(){
setPerson(prevState => ({...prevState, age}))
}
  
  return (
    <>
    <button onClick={addKvp}>Make things Happen</button>
    <h1>{person.firstName + " " + person.lastName}</h1>
    <p>{person.age}</p>
    </>
  );
}






//6.     What’s wrong with the following state update?
// const [colors, setColors] = useState(["pink", "blue"])
  
  // function handleClick(){
  //   setColors(prevColors => [...prevColors, "green"])
  // }






// 5.    Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.







// 4.    Change the following state-setting functions to use an implicit return
// a.
//   const [colors, setColors] = React.useState(["pink ", "blue"])

// function doThis() {
  //   setColors(prevColors => [...prevColors, " green"])
  // }

// b.
//   const [count, setCountObject] = React.useState(0)
  
//   function increment(){
//     setCountObject(count => count + 1)
//   }
  
  
  
  //2.    Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
  // const [color, setColor] = React.useState("")

// function handleClick(){
  //   setColor("your not")
  // }
  // function handleAgain(){
    //   setColor("just hit refresh haha")
// }




// 3.    Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.
// const [people, setPeople] = React.useState([
  // 	  {
    // 		  firstName: "John",
    // 		  lastName: "Smith"
    // 	  }
    //   ])
// const friend = {
//   firstName: "Colton",
//   lastName: "Walker"
// }

//   function addPeople() {
//     setPeople(people.concat(friend))
//   }
//   console.log(people)