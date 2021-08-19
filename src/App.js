import spoon from './assets/spoonfork.png';
import herobg from './assets/herobg.jpg';
import wave from './assets/Vector.svg';
import './App.css';

var heroback = {
  backgroundImage: `url(${wave}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${herobg})`,
  backgroundPosition: '60% 155%, center, center',
  backgroundSize: 'auto, cover, cover',
  backgroundRepeat: 'no-repeat'
};

function App() {
  return (
    <div className="hero" style={ heroback }>

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

        <a className="order">

        <h4>Order <br /> Now</h4>
        <img src={spoon} alt="" />
        </a>


     </div>

    </div>
  );
}

export default App;
