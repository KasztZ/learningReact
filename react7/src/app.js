import React from "react";
import Nav from "./nav.js";
import Content from "./content.js"
import data from "./data.js"
import "./index.css"


export default function App() {

const cards = data.map(item => {
    
    return (
        <Content
        key={item.id}
        {...item}
        //ou eu uso item={item} -> no .js eu uso por exemplo -> props.item."oQueVocêQuiser"
        />
    )
})

    return (
        <div className="entireApp">
            <Nav />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}