import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import image from './broom.png'
import Button from '@mui/material/Button';
import { useState } from 'react';


function TodoList() {
    const [inputText, setinputText] = useState("");
    const [arr, setArr] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" }
    ]);
    const [counter, setCounter] = useState(3);

    const change = (e) => {
        setinputText(e.target.value)
    }

    function clickHandler() {
        if (!inputText.trim()) {
            return;
        }
        // setArr(arr.push({ id: counter, text: inputText }));
        let log = { id: counter, text: inputText }
        setArr([...arr, log]);
        setCounter(counter + 1)
        setinputText("");
    }
    const deleteTask = (id) => {
        setArr(arr.filter(p => p.id != id))
    }   

    
    return (
        <div class="tasks">
            <div class="tasksInput">
                <TextField value={inputText} onChange={change} id="outlined-basic" label="Введите задачу" variant="outlined" />
                <Button onClick={clickHandler} variant="contained">Click to add</Button>
            </div>
            <div class="list">
                {arr.map((item) => (
                    <Card key={item.id} id={item.id} sx={{ maxWidth: 500 }}>
                        <CardContent style={{ display: 'flex' }}>
                            <Typography gutterBottom>
                                {item.text}
                            </Typography>
                            <button id={item.id}  class='buttona'>
                                {/* <ClearIcon class="aaaaa" /> */}
                                <img  src={image} id={item.id} onClick={(e) => (deleteTask(item.id))} class="aaaaa"/>
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default TodoList;