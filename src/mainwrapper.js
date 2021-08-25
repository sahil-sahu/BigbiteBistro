import React from 'react';
import HeadUp from "./components/header/headup";
// import Headown from "./components/header/headown";
import Hero from "./components/hero/hero";
import Vector from "./components/dineIn/vector";
import Facts from "./components/others/funServices";
import Footer from "./components/others/footer";
import "./App.css";

function Main() {
  return (
    <div className="swiper-content main-content">
      <HeadUp />
      <Hero />
      <Vector />
      {/* <Headown /> */}
      <Facts />
      <Footer />
    </div>
  );
}

export default Main;
