import React from "react"
import logo from "../../media/Logo.svg"

export const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <a href="#" className="logo">
                    <img src={logo} alt="logo" className="logo__image"/>
                </a>
                <nav className="navbar">
                    <a className="nav-item" type="button" href="#list">Users</a>
                    <a type="button" href="#form"> Sign up </a>
                </nav>
            </div>
        </header>
    )
}