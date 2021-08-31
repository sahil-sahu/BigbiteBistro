import React from 'react';
import './footer.css';
import swiggy from './assets/swiggy.png';
import zomato from './assets/zomato.png';
import tilted from './assets/tiltbox.svg';
import footbg from './assets/ivan-torres-MQUqbmszGGM-unsplash.jpg';


const Footer = (props) => {
    var backvect = `:root {--tiltbox: url('${tilted}');--pizza: url('${footbg}')}`
  return (
      <footer>
        <style>{backvect}</style>
        <div className="footcontainer">
            <div className="address">
                <h3>Find us at</h3>    
                <h4>Big Bite Bistro</h4>
                <p>Plot 92, beside exide battery care near Pabitra Guest House Jayadev Vihar Square, Nandankanan Rd, Bhubaneswar, Odisha 751013</p>
                <iframe title="Big Bite Bistro on Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.073915384343!2d85.82180971460203!3d20.29720741772474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091e84898fbd%3A0x7383091cd15d4531!2sBig%20Bite%20Bistro!5e0!3m2!1sen!2sin!4v1630382025911!5m2!1sen!2sin" loading="lazy"></iframe>
            </div>    
            <div className="footorder">
                <h3>Order Online</h3>
                <ul className="zoswig">
                    <li><a target="_blank" rel="noreferrer" href="https://www.swiggy.com/restaurants/big-bite-bistro-sahid-nagar-bhubaneswar-390902"><img src={swiggy} alt="" /></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.zomato.com/bhubaneswar/big-bite-bistro-jayadev-vihar-bhubaneshwar"><img src={zomato} alt="" /></a></li>
                </ul>
                <h3>Explore</h3>
                <ul className="qlinks">
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://chefpranay.bigbitebistro.com">About Owner</a></li>
                    <li><a href="/reservation">Reserve a Table</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://contrivers.tk/#contact">Developer Contact</a></li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Contact Us</h3>
                <ul className="phone">
                    <li><i className="fas fa-phone-alt"></i><a href="tel:+917263072110">+917263072110</a></li>
                    <li><i className="fab fa-whatsapp"></i><a target="_blank" rel="noreferrer" href="tel:+917263072110">+917263072110</a></li>
                </ul>
                <h3>Connect Us</h3>
                <ul className="social">
                    <li><a href="https://www.instagram.com/big.bitebistro/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/bigbitebistro.bbsr" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a></li>
                    <li><a href="youtube.com" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a></li>
                </ul>
                <a className="rateus" href="https://g.page/r/CTFFXdEcCYNzEA0/review"><h4>Rate us on google maps <i class="fas fa-map-marker-alt"></i></h4></a>

            </div>
        </div>  
        <div className="footest">
            Designed with <i class="far fa-heart"></i> by <a href="https://contrivers.tk">contrivers</a>
        </div>
      </footer>
  );
};

export default Footer;