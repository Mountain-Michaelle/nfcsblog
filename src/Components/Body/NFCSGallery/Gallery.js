import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import trending from '../../Data/trending';
import '../../../Assets/CSS/Gallery.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';



function Gallery({background, windowWidth, pixel, trend}) {
    const [text, setText] = useState("");
    console.log("text ", text)
  return (
    <div className='slider-container'>
        <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={windowWidth >= 900 ? pixel : 1}
        spaceBetween={50}
        speed={"1500"}
        autoplay={
            {
                delay: "4000",
                disableOnInteraction: false,
                
            }
        }
        onAutoplay={() => {trend.map(trend => setText(trend.title))}}
        coverflowEffect={
            {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            centeredSlides: true
            }
        }
        pagination={{el: '.swiper-pagination', clickable: true}}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className='swiper-container'
        >
            
                {
                    trend.map((post, index) => {
                        return(
                            <>
                            <h2>{post.title}</h2>
                            <SwiperSlide  key={index}>
                                <img src={post.image} alt="" width="100%" style={{transition: "all 1s"}} />
                                <p className='slide__text' style={background}>{post.title}</p>
                            </SwiperSlide>
                            </>
                        )
                    })
                }
            
            <div className='slider-controller'>
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                
                <div className="swiper-button-next slider-arrow">
                    <ion-icon  style={{}}name="arrow-forward-outline"></ion-icon>
                </div>
                <div className='swiper-pagination'></div>
            </div>

        </Swiper>
    </div>
  )
}

export default Gallery