import React from "react";
import Navbar from "./navbar"
import Cards from "./cards"
import data from "./data_cards"
import "./index.css"

export default function App() {
    const cards = data.map(item => {
        return (
            <Cards
                key={item.index}
                {...item}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}