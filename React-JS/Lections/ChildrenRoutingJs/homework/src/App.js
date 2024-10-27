import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
