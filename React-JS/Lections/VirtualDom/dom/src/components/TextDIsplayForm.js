import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function TextDisplayForm() {
    const [text, setText] = useState("");
    const change  = (e) => {
        setText(e.target.value)
    }
    const view = () => {
        setText("")
        const h5 = document.querySelector('h5');
        h5.textContent = text;
    }
    return (
        <div class="block">
            <TextField onChange={change} id="outlined-basic" value={text} label="Введите текст" variant="outlined" />
            <Button onClick={view} fullWidth variant="contained">Отобразить текст</Button>
            <Typography variant="h5" gutterBottom></Typography>
        </div>
    );
}

export default TextDisplayForm;