import React from "react";

const SearchBar = ({onChange, inputRed}) => {
    return(
        <div>
            <input type="text"
                ref = {inputRed}
                placeholder="Search"
                onChange={(e)=> onChange(e.target.value)}
                    />
        </div>
    )
}
export default SearchBar