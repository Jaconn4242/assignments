import Pet from "./Pet"



function Friend(props){
    
    const PetInfo = props.pets.map(pet =>{
        return(<Pet 
                key={pet.name}
                {...pet}
                
            />)
    })
    return(
        <>
       <div className="Friend">
           <h1>{props.name}</h1>
           <h2>{props.age}</h2>
       </div>
           {PetInfo}
       </>
    )
}

export default Friend;