import CurrentTime from "./CurrentTime";
import EventCard from "./EventCard";
import '../index.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Здарова
        </p>
      </header>
      <CurrentTime />
      <div class="events">
        <h1>События</h1>
        <EventCard name="Прогулка" time="12.12" place="Улица"/>
        <EventCard name="Уборка" time="15.15" place="Дома"/>
        <EventCard name="Поход в магазин" time="22.22" place="Магазин"/>
      </div>
    </div>
  );
}


export  default App;
