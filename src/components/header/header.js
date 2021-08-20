import React from 'react';
import ham from './assets/ham.png';
import menu from './assets/menu.png';
import wht from './assets/whatsapp.png';
import logo from '../../logo.png';
import './header.css';


const Header = (props) => {
  if (props.location == 1) {
    
    return (
      <header className="down">
  
              <div className="bottom">
                <button>
                    <img src={wht} alt="" />
                </button>
                <a href="#" className="brand" >
                    <img src={menu} alt="" />
                </a>
              </div>
  
      </header>  
    );

  }
  return (
    <header className="up">
        <nav className="nav">

            <a href="#" className="brand" >
                <img src={logo} alt="" />
            </a>

            <button>
                <img src={ham} alt="" />
            </button>

        </nav>
    </header>  
  );
};

export default Header;