import React from 'react';
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Vector from "./components/dineIn/vector";

function App() {
  return (
    <div>
      <Header location="0" />
      <Header location="1" />
      <Hero />
      <Vector />
    </div>
  );
}

export default App;
