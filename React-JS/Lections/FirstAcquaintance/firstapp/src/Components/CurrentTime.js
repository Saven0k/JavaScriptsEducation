function CurrentTime() {
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    return (
        <h1>Текущее время: {time}</h1>
    );
}

export default CurrentTime;