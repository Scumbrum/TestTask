import React from "react"

export const Radio = ({name, id, typeName, onChange}) => {
    return (
        <label className="radio">
            <span className="marker">
                <input
                    type="radio"
                    name={typeName}
                    onChange = {() => onChange(id)}
                    value={id}
                    hidden/>
                <span className="marker__dot"></span>
            </span>
            <p>{name}</p>
        </label>

    )
}