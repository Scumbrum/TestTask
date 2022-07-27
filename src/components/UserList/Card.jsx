import React from "react"
import { Tooltip } from "./Tooltip.jsx"

export default function Card ({email, photo, phone, position, name}) {
    return (
        <div className="card">
            <img src={photo} alt="" loading="lazy" className="card__image"/>
            <div className="card__name">
                <Tooltip value={name}/>
            </div>
            <div className="card__info">
                <Tooltip value={position}/>
                <Tooltip value={email}/>
                <Tooltip value={phone}/>
            </div>
            
        </div>
    )
}