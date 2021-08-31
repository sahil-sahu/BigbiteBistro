import React from 'react';
import './sideNav.css';
import insta from './assets/insta.svg';
import fb from './assets/fb.svg';
import wb from './assets/whatsapp.svg';
import phone from './assets/phone.png';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.min.js';
// importScripts('https://unpkg.com/swiper/swiper-bundle.min.js');

function Nav() {
    return(
        <>
        <div id="sidenav" class="sidenav">
         <h2>Bistro</h2>
          <ul>
            <li><a href="menu">Menu</a></li>
            <li><a href="https://www.zomato.com/bhubaneswar/big-bite-bistro-jayadev-vihar-bhubaneshwar">Zomato</a></li>
            <li><a href="https://www.swiggy.com/restaurants/big-bite-bistro-sahid-nagar-bhubaneswar-390902">Swiggy</a></li>
            <li><a href="reserve">Reserve</a></li>
            <li><a href="https://goo.gl/maps/zjziJQagLez1FcsMA">Maps</a></li>
            <li><a href="#footer">Contacts</a></li>
          </ul>
        </div>
        <div className="topnav" id="topnav">
         <ul className="nav-content">
            <li><a href="https://www.instagram.com/big.bitebistro/"><img src={insta} alt="" /></a></li>
            <li><a href="https://www.facebook.com/bigbitebistro.bbsr/"><img src={fb} alt="" /></a></li>
            <li><a href="https://wa.me/message/HVL7SEWYXKZTK1"><img src={wb} alt="" /></a></li>
            <li><a href="tel:7972238279"><img src={phone} alt="" /></a></li>
         </ul>
        </div>
        </>
    );

}

export default Nav;