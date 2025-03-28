import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
