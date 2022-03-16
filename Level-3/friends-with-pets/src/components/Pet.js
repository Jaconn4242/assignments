

function Pet(props){
    const {name, breed} = props
    return (
        <fieldset className="Pet">
            <legend>{`Name: ${name}`}</legend>
            <h4>{`Breed: ${breed}`}</h4>
        </fieldset>
    )
}

export default Pet;