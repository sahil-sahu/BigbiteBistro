import React from 'react';
import gola from './assets/elipse.svg';
import Shop2D from './shopvector';

import './vector.css';

function Vector() {
    var backvect = `:root {--golu: url('${gola}');}`

    return (
    <section className="Dinein">
        <style>{backvect}</style>
        <div className="dine-container">
            <h2>Dine-In</h2>
            <p>in a nutshell below and <br /> do reach out to us soon</p>
            <Shop2D />
            <h2 className="crush" >Foodie's Crush</h2>
        </div>

    </section>
    );
}

export default Vector;
