import React from 'react';
import './sideNav.css';
import logo from '../../logo.png';
// import insta from './assets/insta.svg';
// import fb from './assets/fb.svg';
// import wb from './assets/whatsapp.svg';
// import phone from './assets/phone.png';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.min.js';
// importScripts('https://unpkg.com/swiper/swiper-bundle.min.js');

function Nav() {
    return(
        <>
        <div id="sidenav" class="sidenav">
         <h2><img src={logo} alt="" /></h2>
          <ul>
            <li><a href="menu">Menu</a></li>
            <li><a href="reserve">Reserve</a></li>
            <li><a target="_blank" href="https://www.zomato.com/bhubaneswar/big-bite-bistro-jayadev-vihar-bhubaneshwar">Zomato</a></li>
            <li><a target="_blank" href="https://www.swiggy.com/restaurants/big-bite-bistro-sahid-nagar-bhubaneswar-390902">Swiggy</a></li>
            <li><a target="_blank" href="https://goo.gl/maps/zjziJQagLez1FcsMA">Maps</a></li>
            <li><a href="#footer">Contacts</a></li>
          </ul>
        </div>
        <div className="topnav" id="topnav">
         <ul className="nav-content">
            <li><a target="_blank" href="https://www.instagram.com/big.bitebistro/"><i class="fab fa-instagram"></i></a></li>
            <li><a target="_blank" href="https://www.facebook.com/bigbitebistro.bbsr/"><i class="fab fa-facebook-f"></i></a></li>
            <li><a target="_blank" href="https://wa.me/message/HVL7SEWYXKZTK1"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="tel:7972238279"><i class="fas fa-phone-alt"></i></a></li>
         </ul>
        </div>
        </>
    );

}

export default Nav;