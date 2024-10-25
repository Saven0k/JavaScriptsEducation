import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function FtoC() {

    const [fahrenheit, setFahrenheit] = useState("")
    const [celsius, setCelsius] = useState("")

    const change = (e) => {
        setFahrenheit(e.target.value)
    }

    const convertToC = () => {
        setCelsius(`${((fahrenheit- 32) * 5/9).toFixed(2)}C`)
        const a = document.querySelectorAll('input')[1];
        a.value = celsius;
    }

    return (
        <div class="block">
            <TextField onChange={change} id="outlined-basic" label="Фаренгейта" variant="outlined" />
            <Button onClick={convertToC} variant="contained">Contained</Button>
            <TextField  id="outlined-basic1" label="" variant="outlined" />
        </div>
    );
}

export default FtoC;