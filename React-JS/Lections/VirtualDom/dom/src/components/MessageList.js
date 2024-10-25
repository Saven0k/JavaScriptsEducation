function MessageList({key}) {
    return (
        <>
            <ul>
                <li key={key} id="1">lorem </li>
                <li key={key} id="2">lorem lorem</li>
                <li key={key} id="3">lorem lorem lorem</li>
                <li key={key} id="4">lorem lorem lorem lorem</li>
            </ul>
        </>
    );
}

export default MessageList;