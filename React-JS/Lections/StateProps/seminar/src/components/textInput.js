import { useState } from "react";

function TextInput() {
    const [value, setValue] = useState()
    const change = ({target}) => {
        setValue(target.value)
    }
    return (
        <>
            <input type="text" onInput={change} value={value} placeholder="Введите текст"/>
            <p class="p">{value}</p>
        </>
    );
}

export default TextInput;