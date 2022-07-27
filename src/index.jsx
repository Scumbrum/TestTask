import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./components/index.jsx"
import "./styles/index.sass"

const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

root.render(
    <App />
)