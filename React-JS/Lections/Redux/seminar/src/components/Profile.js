import { useContext } from "react";
import { ThemeContext } from "../App";

function Profile() {
    const theme = useContext(ThemeContext)
    return (
        <>
            <div className={theme == "light" ? `light`: `dark`}>
                <h1>Profile</h1>
                <p>akjdsfaljsbndahbslhfljkhblakhblekjhbwlkjf</p>
            </div>
        </>
    );
}

export default Profile;