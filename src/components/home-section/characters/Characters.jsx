import "./character.scss"

import HomeSection from "../HomeSection"
import CharacterCard from './CharacterCard'

import { bg2 } from '../../../assets/images'
import { characterDatas } from '../../../assets/characterDataset'

import { Swiper, SwiperSlide } from 'swiper/react'

const Character = props => (
        <HomeSection
            className={`character ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay bg-image"
            bgImage={bg2}>
                <div className="container relative title">
                    {/* <h2>personagens do game</h2> */}
                    <div className="character-list">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={0}
                            grabCursor={true}
                            nested={true}>
                            {
                                characterDatas.map((item, index) => 
                                    <SwiperSlide key={index}>
                                        <CharacterCard item={item} id={index} />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
        </HomeSection>
)


export default Character