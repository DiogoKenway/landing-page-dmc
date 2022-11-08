import { bg3, trailer } from '../../../assets/images'

import HomeSection from '../HomeSection'

import './trailer.scss'

import bgVideo from '../../../assets/video'
import { useRef, useEffect } from 'react'

const Trailer = props => {

    const videoRef = useRef(null)

    useEffect(() => {

        videoRef.current.play()
        
        const pauseVideo = () => {
            if (!document.hasFocus()) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }

        document.addEventListener('webkitvisibilitychange', pauseVideo)
        
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, [])
   

    return (
        <HomeSection
            className={`trailer ${props.isActive ? 'active' : ''}`}
            contentClassName='trailer__content'
            bgImage={bg3}
        >
            <div className="trailer__content__img">
                <img className='img-ap' src={trailer} alt="Trailer Devil may cry 5" />
            </div>
            <div className="trailer__content__info">
                <div className="title">
                    <span>Divirta-se com esse game Maravilhoso!</span>
                    <h2 className="primary-color m-t-4">Faça Combos Incriveis....</h2>
                </div>
            </div>
            <div className={`bg-animation ${props.isActive ? 'active' : ''}`}>
                <video
                    ref={videoRef}
                    loop={true}
                    muted="muted"
                    className="overlay">
                        <source src={bgVideo} type="video/mp4"/>
                </video>
            </div>
        </HomeSection>
    )
}


export default Trailer