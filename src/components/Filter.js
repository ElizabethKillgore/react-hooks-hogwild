import React from "react"

function Filter( {onlyGreased, onUpdateGreasedFilter, sortBy, onUpdateSort} ) {

    return (
        <div>
            <label> 
                Show Only Greased
                <input 
                type="checkbox" 
                checked={onlyGreased}
                onChange={onUpdateGreasedFilter}
                />
            </label>
            <select value={sortBy} onChange={(e) => onUpdateSort(e.target.value)}>
                <option value="name">Sort by name</option>
                <option value="weight">Sort by weight</option>
            </select>
        </div>
    )    
}

export default Filter