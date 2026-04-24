import React from 'react'

const ComboBox = ({ onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '30px', padding:'20px' }}>
      <select name="" id="" onChange={(e) => { onChange(e.target.value) }}>
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="in_progress">In progress</option>
        <option value="pending">Pending</option>
      </select>

    </div>
  )
}

export default ComboBox
