import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { createContext, useState } from 'react';





function App() {

  return (

    <div className="App">
      <AddProduct />
      <ProductList />
    </div>

  );
}

export default App;
