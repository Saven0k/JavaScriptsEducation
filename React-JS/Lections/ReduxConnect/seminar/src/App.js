import AddNote from "./components/AddNote";
import AddProduct from "./components/AddProduct";
import FavoritesList from "./components/FavoritesList";
import NoteList from "./components/NoteList";


function App() {
  return (
    <div className="app">
      {/* <AddNote />
      <NoteList /> */}
      <AddProduct/>
      <FavoritesList />
    </div>
  );
}

export default App;
