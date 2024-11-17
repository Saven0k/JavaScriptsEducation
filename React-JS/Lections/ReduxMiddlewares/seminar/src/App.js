import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "./components/button";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'Action'})
  }, [dispatch])
  
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
