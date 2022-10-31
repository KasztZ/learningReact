import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Page />)












/*
import React from "react";
import ReactDOM from "react-dom/client"


function TemporaryName() {
    return (
        <div>
            <img src="./logo512.png" width="40px" alt="this"/>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<TemporaryName />)*/