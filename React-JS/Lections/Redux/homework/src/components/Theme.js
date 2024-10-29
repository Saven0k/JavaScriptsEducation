import { useDispatch, useSelector } from "react-redux"
import { toDark, toLight } from "./ThemeChanger";

export default function Theme() {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    const bd = document.body;

    return (
        <div className={theme == "light" ? `light buttons`: `dark buttons`}>
            <button className="button" onClick={
                () => {
                    dispatch(toLight())
                    bd.classList.add('light')
                    bd.classList.remove('dark')
                }
            }>Перейти на светлую тему</button>
            
            
            <button className="button" onClick={
                () => {
                    dispatch(toDark())
                    bd.classList.add('dark')
                    bd.classList.remove('light')
                }
            }>Перейти на темную тему</button>

        </div>
    )
}