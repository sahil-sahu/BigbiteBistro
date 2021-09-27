import React from 'react';
import ham from './assets/ham.png';
import logo from '../../logo.png';
import './header.css';

const HeadUp = (props) => {

  return (
    <header className="up" id="up">
        <nav className="nav">

            <a href="http://zoma.to/r/19732106" className="brand" >
                <img src={logo} alt="" />
            </a>

            <button className="hamenu" onClick={props.slipped}>
                <img src={ham} id="hamy" alt="" />
                <div id="ham">
                  <div id="hamer"></div>
                  <div id="hamer-i"></div>
                </div>
            </button>

        </nav>
    </header>  
  );
};

export default HeadUp;