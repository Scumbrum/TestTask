import React from "react"

export const Uploader = ({onChange, value,error}) => {
    const postfix = !!error ? "--error" : ""
    return (
        <div className="uploader">
            <div className={`uploader__container${postfix}`}>
                <input type="file" hidden id="upload" onChange={(e)=> onChange(e.target.files[0])} />
                <label htmlFor="upload" className= {`uploader__button${postfix}`}>
                    Upload
                </label>
                <input type="text" readOnly placeholder="Upload your photo" value={value.name || ""}/>
            </div>
            <span className={`field__helper ${!!error && "error"}`}>{error}</span>
        </div>
    )
}