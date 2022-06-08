import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
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
                    <h1>Milk Drunk</h1>
                    <h3>Experience the refreshing difference of quality tracking</h3>
                    <button >swipe to see more</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h1>Slide two!</h1>
                    <h1>hello there</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h1>Slide 3</h1>
                    <h1>hello there</h1>
                    <button onClick={() => navigate("/auth")}>Lets get Started!</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Greeting