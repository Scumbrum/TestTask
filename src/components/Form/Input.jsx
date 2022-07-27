import React from "react"

export const Input = ({onChange, value, placeholder, helper, error}) => {
    return (
        <div className="field">
            <div className={`field__container ${!!error && "error"}`}>
                <span className={`field__upper ${!!value && "active"} ${!!error && "error"}`}>{placeholder}</span>
                <input
                    type="text"
                    className="field__input"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    />
            </div>
            <span className={`field__helper ${!!error && "error"}`}>{error || helper}</span>
        </div>

    )
}