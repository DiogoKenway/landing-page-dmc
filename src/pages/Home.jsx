import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'


import { 
    Welcome,
    Character,
    CharactersDetails, 
    Trailer
} from '../components/home-section' 

import { characterDatas } from '../../src/assets/characterDataset'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: "fade",
    speed: 1000
}


const Home = () => (
    <>
        <Swiper {...swiperOptions}>
            <SwiperSlide>
                {({ isActive }) => <Welcome isActive={isActive}/>}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => <Character isActive={isActive}/>}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => <Trailer isActive={isActive}/>}
            </SwiperSlide>
        </Swiper>
        {
            characterDatas.map((item, index) => <CharactersDetails
            key={index}
            item={item}
            id={index}
            />)
        }
    </>
)


export default Home
