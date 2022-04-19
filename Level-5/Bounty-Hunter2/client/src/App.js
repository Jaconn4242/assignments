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
    .catch(err => console.log(err.response.data.errMsg))
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
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => (bounty._id !== bountyId)))
    })
    .catch(error => console.log(error))
  }

  function updateBounty(bountyId, bountyUpdates){
    axios.put(`/bounties/${bountyId}`, bountyUpdates)
    .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data)))
    .catch(error => console.log(error))
    
  }

  function handleFilterByType(e) {
    if(e.target.value === "reset"){
      getBounties()
    } else {
    axios.get(`/bounties/search/type?type=${e.target.value}`)
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
    }
  }

  function handleFilterByLivingStatus(e) {
    if(e.target.value === "reset"){
      getBounties()
    } else {
    axios.get(`/bounties/search/isLiving?isLiving=${e.target.value}`)
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
    }
  }
  
  return (
    <div className="App" >
      <BountyForm addBounty={addBounty} />
      <div className="filter-container">
        <div className="type-wrapper">
          <h4>Filter by Type</h4>
          <select  onChange={handleFilterByType} className="filter-by-type">
            <option value="reset">All Types</option>
            <option value="jedi">jedi</option>
            <option value="sith">sith</option>
          </select>
        </div>
        <div className="isLiving-wrapper">
          <h4>Filter by Living Status</h4>
          <select  onChange={handleFilterByLivingStatus} className="filter-by-living">
            <option value="reset">Alive and Dead</option>
            <option value="true">Alive</option>
            <option value="false">Dead</option>
          </select>
        </div>
      </div>
      {bounties.map(bounty => <BountyCard {...bounty} 
                                          key={bounty.firstName} 
                                          deleteBounty={deleteBounty}
                                          updateBounty={updateBounty}
                                          />)}
    </div>
  );
}

export default App;
