import React from "react";
import ProductList from "./components/ProductList";
import Home from "./components/home";

const App = () => {
  return (
    <div>
      <h3>Welcome to this app</h3>
      <Home />
      <ProductList />
    </div>
  );
};

export default App;
