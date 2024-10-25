import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1)
    }
    const remove = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>+1</button>
            <button onClick={remove}>-1</button>
        </div>
    );
}

export default Counter;