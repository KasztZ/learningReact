import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Nav from "./nav.js"
import MainContent from "./mainContent.js"

function Page() {
    return(
        <div>
            <Nav />
            <MainContent />
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Page />)