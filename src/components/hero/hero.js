import React from 'react';
import spoon from './assets/spoonfork.png';
import herobg from './assets/herobg.jpg';
import wave from './assets/Vector.svg';
import './hero.css';


const Hero = (props) => {

  var backvect = `:root {--hill: url('${wave}');--herobg: url('${herobg}')}`
  return (
    <section className="hero">
     <style>{backvect}</style>

     <div className="hero-container">

     <div className="herohead">

          <h1 className="mainhead">

            Let's make you <br />
            a <span>Foodie</span>

          </h1>

          <h3 className="maintext">

              try out our mouth-watering dishes <br />
              with its extraordinary pleasing price

          </h3>

        </div>

        <a className="order" href="http://zoma.to/r/19732106">

          <h4>Order <br /> Now</h4>
          <img src={spoon} alt="" />
        </a>


     </div>

    </section>
  );
};

export default Hero;