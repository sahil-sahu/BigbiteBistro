import React from 'react';
import './footer.css';
import swiggy from './assets/swiggy.png';
import zomato from './assets/zomato.png';


const Footer = (props) => {

  return (
      <footer>
        <div className="footcontainer">
            <div className="address">
                <h3>Find us at</h3>    
                <h4>Big Bite Bistro</h4>
                <p>Plot 92, beside exide battery care near Pabitra Guest House Jayadev Vihar Square, Nandankanan Rd, Bhubaneswar, Odisha 751013</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.073915385929!2d85.82180434986526!3d20.297207417658708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091e84898fbd%3A0x7383091cd15d4531!2sBig%20Bite%20Bistro!5e0!3m2!1sen!2sin!4v1629575837430!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>    
            <div className="footorder">
                <h3>Order Online</h3>
                <ul className="zoswig">
                    <li><a target="_blank" rel="noreferrer" href="https://www.swiggy.com/restaurants/big-bite-bistro-sahid-nagar-bhubaneswar-390902"></a><img src={swiggy} alt="" /></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.zomato.com/bhubaneswar/big-bite-bistro-jayadev-vihar-bhubaneshwar"></a><img src={zomato} alt="" /></li>
                </ul>
                <h3>Explore</h3>
                <ul>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a target="_blank" rel="noreferrer" href="chefpranay.bigbitebistro.com">About Owner</a></li>
                    <li><a href="/reservation">Reserve a Table</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://contrivers.tk/#contacts">Developer Contact</a></li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Contact Us</h3>
                <ul className="phone">
                    <li><i className="fas fa-phone-alt"></i><a href="tel:+917263072110">+917263072110</a></li>
                    <li><i className="fab fa-whatsapp"></i><a target="_blank" rel="noreferrer" href="tel:+917263072110">+917263072110</a></li>
                </ul>
                <h3>Connect Us</h3>
                <ul>
                    <li><a href="" target="_blank" rel="noreferrer"><i class="fab fa-instagram-square"></i></a></li>
                    <li><a href="" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a></li>
                    <li><a href="" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a></li>
                </ul>
                <h3>Rate Us on </h3>
                <a href="https://goo.gl/maps/A8PMn1cK2UgvMZFeA"><i class="fas fa-map-marker-alt"></i></a>

            </div>
            <div className="footest">
                Designed with <i class="far fa-heart"></i> by <a href="https;//contrivers.tk">contrivers</a>
            </div>
        </div>  
      </footer>
  );
};

export default Footer;