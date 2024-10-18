import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const click = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>Число: {counter}</h2>
            <button onClick={click}>+1</button>
        </div>
    );
}

export default Counter;