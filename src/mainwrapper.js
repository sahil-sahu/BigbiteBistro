import React from 'react';
import HeadUp from "./components/header/headup";
// import Headown from "./components/header/headown";
import Hero from "./components/hero/hero";
import Vector from "./components/dineIn/vector";
import Facts from "./components/others/funServices";
import Footer from "./components/others/footer";
import "./App.css";

function Main() {
  var boo = false;
  function backup(e){
      if(boo){
          boo = false;
          document.getElementById("main").style.transform =  `scale(1) translate(0,0)`;
      }
    }

    function slidein(e){
      if(!boo){
      setTimeout(function(){ 
        document.getElementById("main").style.transform =  `scale(1) translate(-25%,25%)`;
        boo = true;
      }, 1);  
      }
    }


  return (
    <div className="main-content" id="main"  onClick={backup}>
      <HeadUp slipped={slidein} />
      <Hero />
      <Vector />
      {/* <Headown /> */}
      <Facts />
      <Footer />
    </div>
  );
}

export default Main;
