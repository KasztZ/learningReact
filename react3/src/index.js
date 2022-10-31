import React from "react";
import ReactDOM from "react-dom/client"

const page = (
    <div>
        <nav>This is a Nav</nav>
        <h1>This is a text</h1>
        <ul>
            <li>This is a list 1</li>
            <li>This is a list 2</li>
        </ul>
    </div>
)

ReactDOM.createRoot(document.querySelector("#root")).render(page)