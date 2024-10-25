import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function CtoF() {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    const change = (e) => {
        setCelsius(e.target.value)
    }

    const convertToF = () => {
        setFahrenheit(`${((celsius * 9/5)+32).toFixed(2)}F`)
        const a = document.querySelectorAll('input')[1];
        a.value = fahrenheit;
    }
    return (
        <div class="block">
            <TextField onChange={change}  id="outlined-basic" label="Цельсия" variant="outlined" />
            <Button  onClick={convertToF} variant="contained">Contained</Button>
            <TextField  id="outlined-basic1" label="" variant="outlined" />
        </div>
    );
}

export default CtoF;