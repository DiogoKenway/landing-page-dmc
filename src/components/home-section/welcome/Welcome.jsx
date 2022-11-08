import "./welcome.scss"

import { useEffect } from "react"

import HomeSection from "../HomeSection"
import Button from "../../button/Button"

import hoverEffect from "hover-effect"

import {
    bg1,
    characterDante,
    characterNero,
    characterV,
    distortion
} from '../../../assets/images'

const charImgs = [characterNero, characterDante, characterV]

const Welcome = props => {

    useEffect( () => {
        const welcomeImgs = document.querySelectorAll("#welcome__img__slide img")
        const animates = []   

        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            
            const animation = new hoverEffect({
                parent: document.querySelector("#welcome__img__slide"),
                intensity: 0.7,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            
            animates.push(animation)
        })

        welcomeImgs.forEach(e => e.remove())

        let currentItem = 0
        
        const autoImageSlide = () => {

            let prevItem = currentItem
            currentItem = (currentItem + 1) % animates.length 

            if (!document.hidden) {
                animates[prevItem] && animates[prevItem].next()
            }
            
            setTimeout(() => {
                let canvas = document.querySelectorAll("#welcome__img__slide > canvas")
                document.querySelector("#welcome__img__slide").appendChild(canvas[0])
                animates[prevItem] && animates[prevItem].previous();
            }, 3000)
        }

        setInterval(autoImageSlide, 3000)

    }, [])


    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content bg-image"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span className="primary-color">Bem Vindo</span>
                        <h2 className="primary-color">Devil Hunter</h2>
                    </div>
                    <div className="description m-t-4">
                        <p>Devil May Cry 5 é um jogo eletrônico de ação-aventura hack and slash desenvolvido e publicado pela Capcom. É o quinto título principal da série Devil May Cry. O jogo acontece cinco anos depois de Devil May Cry 4 e segue um trio de personagens com poderes demoníacos: Dante, Nero e um novo protagonista chamado V.</p>
                    </div>
                    <Button className="pulse">Saiba Mais</Button>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    { 
                        charImgs.map((item, index) =>  <img src={item} key={index} /> ) 
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome