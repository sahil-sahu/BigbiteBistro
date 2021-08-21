import React from 'react';
import menu from './assets/menu.png';
import wht from './assets/whatsapp.png';
import './header.css';

const Headown = (props) => {
    // const [onoff, checker] = useState(false);
    // console.log(onoff);
    // if (onoff === true){
    //     console.log("oggy",onoff);
    //     checker(false);
    // }
    // else {
    //     console.log("buggy",onoff);
    //     checker(true);
    // }
    // useEffect(() => {

    //     console.log("samosa");
    //     window.addEventListener('scroll', (event) => {
    //         if (window.innerHeight === window.scrollY ) {
    //                 console.log("oggy");
    //             }
    //         else {
    //             console.log("bggy");
    //         }
            
    //       });
    //   });
    return (

      <header className="down" id="down" >
  
              <div className="bottom">
                <button>
                    <img src={wht} alt="" />
                </button>
                <a href="http://zoma.to/r/19732106" className="brand" >
                    <img src={menu} alt="" />
                </a>
              </div>
  
      </header>  
    );

};

export default Headown;