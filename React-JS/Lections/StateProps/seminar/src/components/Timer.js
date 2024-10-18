import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        
        return () => {
            clearInterval(timer)
        }
        
    }, [])

    return (
        <div><p>Таймер {time}</p></div>
    )
}

export default Timer;