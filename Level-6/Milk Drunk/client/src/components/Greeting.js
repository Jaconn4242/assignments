import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import MDLogo from "../images/MDLogo.svg"
import SwipeHand from "../images/SwipeHand.png"
import HappyDad from "../images/HappyDad.svg"
import BabyBottle from "../images/BabyBottle.png"
import Diaper from "../images/Diaper.png"
import Crib from "../images/Crib.png"
import 'swiper/css'
import 'swiper/css/pagination';
import "../styles/Greeting.css"
function Greeting() {

    const navigate = useNavigate()
    return (

        <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            edgeSwipeDetection={true}
            resistance={false}
            pagination={{ clickable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='slide-one'>
                    <img src={MDLogo} alt="" width={300} />
                    <h1>Milk Drunk</h1>
                    <h3>A refreshing tracking experience</h3>
                    <div className='swipe-container'>
                    <img src={SwipeHand} alt="Swipe Hand" />
                    <small>Swipe to see more</small>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-two'>
                    <h1>Record Baby Activities</h1>
                    <h3>Track with Confidence:</h3>
                    <ul>
                        <div className='list-item'>
                        <img src={BabyBottle} alt="baby-bottle" />
                        <li>Feeding Record</li>
                        </div>
                        <div className='list-item'>
                        <img src={Diaper} alt="baby-bottle" />
                        <li>Diaper Changes</li>
                        </div>
                        <div className='list-item'>
                        <img src={Crib} alt="baby-bottle" />
                        <li>Sleeping Habits</li>
                        </div>
                    </ul>
                    <button onClick={() => navigate("/Auth")}>Get Started</button>
                    <img src={HappyDad} alt="" width={300} />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Greeting