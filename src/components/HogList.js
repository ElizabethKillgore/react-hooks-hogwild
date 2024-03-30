import React, {useState} from "react"
import Filter from "./Filter"
import Hog from "./Hog"

import hogs from "../porkers_data";

function HogList( ) {
const [onlyGreased, setOnlyGreased] = useState(true)
const [sortBy, setSortBy] = useState("name")

  const filteredHogs = hogs.filter(hog => {
    if (onlyGreased) {
    return hog.greased 
    } else {
    return true
    }
  })
  
  const sortedHogs = filteredHogs.sort((hogA, hogB) => {
    if(sortBy === "name") {
      return hogA.name.localeCompare(hogB.name)
    } else {
      return hogA.weight - hogB.weight
    }
  }
  )

  const hogTiles = sortedHogs.map(hog =>  {
    return <Hog key={hog.name} hog={hog}/>
  } )

  function handleUpdateGreasedFilter() {
    setOnlyGreased(!onlyGreased)
  }

  function handleUpdateSort(newSort) {
    console.log(newSort)
    setSortBy(newSort)
  }

    return (
      <div>
        <Filter onlyGreased={onlyGreased}
        onUpdateGreasedFilter={handleUpdateGreasedFilter}
        sortBy={sortBy}
        onUpdateSort={handleUpdateSort}
        />
        {hogTiles}
      </div>
    )

  

}

export default HogList










