import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

const detailsList = [
    { id: 1, title: "Mark1", cost: "25" },
    { id: 2, title: "Mark2", cost: "35" },
    { id: 3, title: "Mark3", cost: "45" },
    { id: 4, title: "Mark4", cost: "55" },
    { id: 5, title: "Mark5", cost: "65" }
]

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/details/:id" element={<DetailPage details={detailsList} />} />
                <Route path="*" element={<ListPage detailsList={detailsList} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;