import React from 'react';
import HeadUp from "./components/header/headup";
// import Headown from "./components/header/headown";
import Hero from "./components/hero/hero";
import Vector from "./components/dineIn/vector";
import Facts from "./components/others/funServices";
import Testi from "./components/others/testi";
import Footer from "./components/others/footer";
import "./App.css";

function Main() {
  var boo = false;
  function backup(e){
      if(boo){
          boo = false;
          document.getElementById("sidenav").style.zIndex = -1;
          document.getElementById("topnav").style.zIndex = -1;
          document.getElementById("main").style.transform =  `scale(1) translate(0,0)`;
          document.getElementById("hamy").style.animation = `hamburg-i .5s forwards`;
          document.getElementById("ham").style.opacity = 0;
          document.getElementById("hamer").style.transform = `rotateZ(0deg)`;
          document.getElementById("hamer-i").style.transform = `rotateZ(0deg)`;
      }
    }

    function slidein(e){
      if(!boo){
      setTimeout(function(){ 
        document.getElementById("main").style.transform =  `scale(1) translate(-25%,25%)`;
        document.getElementById("hamy").style.animation = `hamburg .5s forwards`;
        document.getElementById("ham").style.opacity = 1;
        document.getElementById("hamer").style.transform = `rotateZ(45deg)`;
        document.getElementById("hamer-i").style.transform = `rotateZ(-45deg)`;
        boo = true;
        setTimeout(() => {

          document.getElementById("sidenav").style.zIndex = 1;
          document.getElementById("topnav").style.zIndex = 1;

        },500)
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
      <Testi />
      <Footer />
    </div>
  );
}

export default Main;
