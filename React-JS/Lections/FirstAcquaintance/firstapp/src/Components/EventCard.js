function EventCard(props) {
    return (
        <div class="event">
            <h2>Название: {props.name}</h2>
            <h2>Дата: {props.time}</h2>
            <h2>Место проведения: {props.place}</h2>
        </div>
    );
}

export default EventCard;