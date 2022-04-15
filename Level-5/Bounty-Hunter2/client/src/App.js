import React, {useState, useEffect} from "react"
import axios from "axios"
import BountyCard from "./components/bountyCard"
import BountyForm from "./components/bountyForm"
import "./App.css"


function App() {

  // Setting local state
  const [bounties, setBounties] = useState([])


  // GET Request setting bounties state
  function getBounties() {
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    getBounties()
  }, [])

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
    .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
    .catch(error => console.log(error))
  }

  function deleteBounty (bountyId) {
    axios.delete("/bounties/bountyID")
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => (bounty._id !== bountyId)))
    })
    .catch(error => console.log(error))
  }

  function updateBounty(bountyId, bountyUpdates){
    axios.put(`/bounties/${bountyId}`, bountyUpdates)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }
  
  return (
    <div className="App" >
      <BountyForm addBounty={addBounty} />
      {bounties.map(bounty => <BountyCard {...bounty} 
                                          key={bounty.firstName} 
                                          deleteBounty={deleteBounty}
                                          updateBounty={updateBounty}
                                          />)}
    </div>
  );
}

export default App;
