import React from 'react'

const SearchBar = ({ onChange, inputRef }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '30px' }}>
            <input 
                ref={inputRef}
                type="text" 
                placeholder='Search' 
                onChange={(e) => { onChange(e.target.value) }} 
            />
        </div>
    )
}

export default SearchBar