import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Joke from "./joke.js"


function MyApp() {
    return(
        <div className="page">
            <Joke 
                setup="Qual o nome do peixe que caiu do 10º andar?"
                punchLine="aaaAAATUM!"
            />
            <Joke 
                setup=""
                punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally"
            />
            <Joke 
                setup="Por que o gato mia pra lua mas a lua não mia pro gato?"
                punchLine="Porque astro no mia"
            />
            <Joke 
                setup="Por que ele usa um óculos vermelho?"
                punchLine="Para vermelhor"
            />
            <Joke 
                setup="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<MyApp />)