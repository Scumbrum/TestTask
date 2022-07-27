import React from "react"
import ReactDOM from "react-dom/client"
import { Content } from "./components/Content/Content.component.jsx"
import "./styles/index.sass"

const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

root.render(
    <Content />
)