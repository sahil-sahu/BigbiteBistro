import React, {useEffect} from 'react';
import './testi.css';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Swiper from 'swiper/swiper-bundle.esm.browser.min.js';
import Card from './cards.js';
import 'swiper/swiper.min.css';


function Testimonial(props){

    useEffect(() => {
        // eslint-disable-next-line
        var swiper = new Swiper(".testi", {
            autoplay: {
                delay: 5000,
              },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
          });

    });

    var reviews = {
        'Lachhaman Tudu': ["Good place to hangout and catch up with friends with great food at reasonable prices! I became an absolute fan of their Mexico City Burger with their chef's special black bun that I got for myself as a takeaway. Would 100% recommend everyone to try their offerings.","5","https://lh3.googleusercontent.com/a-/AOh14GhJIgLTc62mD8Nt3e37qbEVkxSgI8xoZKoxKW_t_Q=w250-h250-p-rp-mo-ba3-br100"],
        'Mukti Swaroop Pradhan':["Found this amazing new place just next to Pal Heights at Jayadev Vihar Sq. The burgers were lip-smackingly good and the portions were perfect. The wings were juicy and fresh. Overall a great new place to hangout with friends.",5,"https://lh3.googleusercontent.com/a-/AOh14GgqF39JW7MyIA1spapEtvNoW97EWZMSRP6s273-8w=w250-h250-p-rp-mo-br100"],
        'Amlan Mishra':["Loved their red and black burgers. I tried the vegetarian one and definitely worth the price, also comes with a side of fries. Would totally recommend it. Good food and an amazing staff",5,"https://lh3.googleusercontent.com/a-/AOh14GgC0-hOugz0-wdJRokLYRBNUl56qSCgE00k_l-l=w250-h250-p-rp-mo-br100"],
        'Prangya Suman Mohanty':["This's a cosy place with some yummy snacks & drinks. You should try their Ros Omelette, Red burger & banana smoothie. These are amazing. Overall loved the food & the service. Very neat & clean also following all covid guidelines. So ya do visit.👍",5,"https://lh3.googleusercontent.com/a-/AOh14GjCMTycIICSFlnAFH65cduCw2Mjt0ksdB_FAfxKlA=w250-h250-p-c0x00000000-rp-mo-br100"],
        'Yasoda Maharana':["The best and Authentic Italian and American dishes in Bhubaneswar. Do visit once if you wanna taste the real flavors of Italy 🇮🇹",5,"https://lh3.googleusercontent.com/a-/AOh14GhxsoO6yUs950obgbT-JgjmmjVBNIPHt6Bp2EyvRA=w250-h250-p-c0x00000000-rp-mo-br100"]
    }

    return(
        <section className="testimonial">
            <div className="testimonial-container">
                <h2>Taste Talks</h2>
                <h4>#peoplereviews</h4>
                <div className="reviews">
                <div class="swiper testi">
                    <div class="swiper-wrapper">
                    {// eslint-disable-next-line
                    Object.keys(reviews).map(function (key, index) {
                       return <Card txt={reviews[key][0]} rate={reviews[key][1]} img={reviews[key][2]} nm={key} />
                    })
                    }
                    </div>
                    <div className="navs">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Testimonial;