import { useEffect, useState } from "react";

function CurrentTime() {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        const time = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(time)
        }
    }, [] )
    return (
        <div>Время {date.toLocaleTimeString()}</div>
    );
}

export default CurrentTime;