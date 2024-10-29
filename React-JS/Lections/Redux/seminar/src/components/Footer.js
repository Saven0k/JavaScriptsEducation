import { useContext, useState } from "react";
import { ThemeContext } from "../App";

function Footer() {
    const theme = useContext(ThemeContext)
    const [now , setNow] = useState(new Date());
    setInterval(() => {
        setNow(new Date())
    }, 1000)
    return (
        <>
            <div className={theme === 'light' ? `light`: `dark`}>
                <h1> Footer</h1>
                <h3> Time: {now.toLocaleTimeString()}</h3>
            </div>
        </>
    );
}

export default Footer;