import { useState } from "react";
function ThemesSwitch({theme}) {
    const bd = document.body;
    const [themes, setThemes] = useState(theme)
    const func = () => {
        if (themes == "dark") {
            setThemes("ligth")
            bd.classList.add("light")
            bd.classList.remove("dark")
            
        } else {
            setThemes("dark")
            bd.classList.add("dark")
            bd.classList.remove("light")
        }
    }
    return (
        <>
            <button onClick={func} >Смена темы на {themes == "dark" ? "светлую": "темную"}</button>
        </>
    );
}

export default ThemesSwitch;