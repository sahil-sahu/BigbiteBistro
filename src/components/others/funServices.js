import React from 'react';
import bullet from './assets/bullet.svg';
import dinein from './assets/dinein.svg';
import takeaway from './assets/takeaway.svg';
import mahol from './assets/mahol.svg';
import online from './assets/iphone.svg';

import './funServices.css';

function Facts() {
    return (
        <>
    <section className="Facts">
       <div className="factcontainer">
        <h2>Fun <br /> Facts</h2>
        <ul>
            <li><img src={bullet} alt="*" /> <span>we make real burgers none of those bun tikkis.</span></li>
            <li><img src={bullet} alt="*" /> <span>we don't have refridgerator for base, buns & breads that's why we always have to make fresh products.</span></li>
            <li><img src={bullet} alt="*" /> <span>we are always free of flavour aggregators and artificial colours also we are as organic as MamaEarth's ads.</span></li>
        </ul>
       </div>
    </section>
    <section className="Services">
        <div className="servcontainer">
        <h2>Services</h2>
        <div className="service-items">
            <div className="service-item">
                <img src={dinein} alt="" />
                <a href="/">Dine-In</a>
            </div>
            <div className="service-item">
                <img src={takeaway} alt="" />
                <a href="/">Takeway</a>
            </div>
            <div className="service-item">
                <img src={mahol} alt="" />
                <a href="/">Reserve</a>
            </div>
            <div className="service-item">
                <img src={online} alt="" />
                <a href="/">Order Online</a>
            </div>
        </div>
        </div>
    </section>
    </>
    );
}

export default Facts;
