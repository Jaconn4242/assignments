
import Friend from "./Friend"
import Data from "../Data"

const DataElements = Data.map(person => {
  return (<Friend 
             key={person.id} 
             {...person}
            />)
})


function FriendList(){
    return(
        <div className="FriendList">
       {DataElements}
        </div>
    )
}

export default FriendList;