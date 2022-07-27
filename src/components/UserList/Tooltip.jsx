import React from "react"

export const Tooltip = ({value}) => {
    return (
        <p className="tooltip" title={value}>
            {value} 
        </p> 
    )
}