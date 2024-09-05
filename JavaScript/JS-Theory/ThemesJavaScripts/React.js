// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text"
// }), document.getElementById("app"))

function inputClick() {
    console.log("Click")
}

function mouseOver() {
    console.log("Mouse Over")
}

const placeholder = "Ky!"


const elements = <input placeholder={placeholder} 
        onClick={inputClick} onMouseEnter={mouseOver} />
const app = document.getElementById("app")

ReactDOM.render(elements, app)