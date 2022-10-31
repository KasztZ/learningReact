import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Info from "./info.js"
import About from "./about.js"
import Interests from "./interests"
import Footer from "./footer.js"

function Content() {
    return (
        <div className="wholePage">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Content />)