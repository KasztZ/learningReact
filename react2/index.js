/*
const h1 = document.createElement("h1")
h1.innerText = "Hello, React!"
h1.classList.add("header")
const divRoot = document.querySelector("#root")
divRoot.appendChild(h1)
console.log(h1)
*/

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)


//JSX
//ReactDOM.render(navbar, document.getElementById("root"))

ReactDOM.createRoot(document.querySelector("#root")).render(navbar)