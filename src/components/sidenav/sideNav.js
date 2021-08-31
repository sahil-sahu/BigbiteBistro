import React from 'react';
import './sideNav.css';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.min.js';
// importScripts('https://unpkg.com/swiper/swiper-bundle.min.js');

function Nav() {
    return(
        <>
        <div id="sidenav" class="sidenav">
          Bistro
        </div>
        <div className="topnav">
         <ul className="nav-content">
           <li>insta</li>
         </ul>
        </div>
        </>
    );

}

export default Nav;