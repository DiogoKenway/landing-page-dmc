import './credit.scss'

import { useRef, useEffect } from 'react'

import bgVideo from '../../../assets/video'
import Button from '../../button/Button'


const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {

        videoRef.current.play()
        
        const pauseVideo = () => {
            if (!document.hidden) {
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
        <div className={`credit ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height='100%'
                loop={true}
                muted="muted"
                className="overlay">
                    <source src={bgVideo} type="video/mp4"/>
            </video>
        </div>
    )

}

export default Credit