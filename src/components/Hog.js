import React, { useState } from "react"

function Hog( { hog } ) {
    const [hogDetails, setHogDetails] = useState(false)
    
    function handleToggleDetails() {
        setHogDetails(!hogDetails)
    }

    return (
        <div onClick={handleToggleDetails}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name} />
            {hogDetails ? (
             <div>
               <p>specialty: {hog.specialty}</p>
               <p>greased: {hog.greased ? "yes" : "no"}</p>
               <p>weight: {hog.weight}</p>
               <p>medal: {hog["highest medal achieved"]}</p> 
             </div>   
            ) : null}
        </div>
    )
}


export default Hog


