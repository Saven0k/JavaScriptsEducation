import Button from '@mui/material/Button';
import { useState } from 'react';
import CtoF from './CtoF';
import FtoC from './FtoC';

function TemperatureConverter() {
    const [themes, setThemes] = useState("CtoF")

    const changeThenes = () => {
        if (themes == "CtoF"){
            setThemes("FtoC")
        } else {
            setThemes("CtoF")
        }
    }

    if (themes == "CtoF") {
        return (
            <div class='b1'>
                <CtoF />
                <Button id="button" onClick={changeThenes} variant="contained">Цельсия -> Фаренгейта</Button>
            </div>
        )
    } else {
        return (
            <div class='b1'>
                <FtoC />
                <Button id="button" onClick={changeThenes} variant="contained">Фаренгейта -> Цельсия</Button>
            </div>
        );
    }

}

export default TemperatureConverter;