import React from "react";

    const ComboBox = ({onChange})=> {
        return(
            <div>
                <select name="" id="" onChange = {(e) =>{onChange(e.target.value)}}>
                    <option value="All">All</option>
                    <option value="completed">Completed</option>
                    <option value="in_progress">In Progress</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        )
    }
export default ComboBox
