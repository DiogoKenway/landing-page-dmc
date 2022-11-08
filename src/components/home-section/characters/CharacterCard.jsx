import { useRef } from "react";
import "./character-card.scss"


const CharacterCard = props => {

    const cardRef = useRef(null)

    const item = props.item

    const showCharacter = () => {
        const img = cardRef.current.querySelector('img')
        const pos = img.getBoundingClientRect()

        const newNode = img.cloneNode(true)
        newNode.style.width = img.offsetWidth + 'px'
        newNode.style.height = img.offsetHeight + 'px'
        newNode.style.position = 'absolute'
        newNode.style.top = pos.top + 'px'
        newNode.style.left = pos.left + 'px'
        newNode.style.zIndex = '9'

        newNode.style.transition = "all .7s ease"
        newNode.id = `char-img-${props.id}`

        setTimeout(() => {
            newNode.style.width = 'auto'
            newNode.style.height = '100%'
            newNode.style.top = 0
            newNode.style.left = 0
        }, )

        document.body.appendChild(newNode)

        const videoUrl = `https://youtube.com/embed/${item.video ?? 'sem video'}`
        document.querySelector(`#char-detail-${props.id} iframe`).setAttribute('src', videoUrl)
        document.querySelector(`#char-detail-${props.id}`).classList.add('active')
    }


    return (
        <div className="character-card" onClick={showCharacter} ref={cardRef}>
            <div className="frame">
                <div className=" overlay bg" 
                style={{ backgroundImage: `url(${item.bg})` }}></div>
            </div>
            <img  className="img-card" src={item.img} alt="" />
            <div className="name">{item.name}</div>
        </div>
    )
}

export default CharacterCard