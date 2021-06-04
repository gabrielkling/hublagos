import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Brands = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    }

    return (
        <div id="brands" className="brand-one">
            <div className="container">
                <div className="brand-one__carousel owl-carousel owl-theme">

                    <Swiper {...params}>
                        <div className="item">
                            <img src="/assets/images/resources/1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/4.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/5.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/6.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/7.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/8.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/resources/9.jpg" alt="" />
                        </div>
                       
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Brands;
