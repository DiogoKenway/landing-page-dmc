import "./character-details.scss"

import { closeIcon } from '../../../assets/images'
import { useRef, useEffect } from 'react'

const CharactersDetails = props => {

    const item = props.item

    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const close = () => {
        document.querySelector(`#char-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#char-img-${props.id}`)
        img.style.opacity = 0
        
        setTimeout(() => img.remove(), 500)
    }


    return (
        <div
            id={`char-detail-${props.id}`}
            className={`character-detail bg-image overlay 
            ${props.active ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="character-detail__content">
                <span>Classificação: <span className="primary-color">{item.classification}</span></span>
                <h2 className='name main-color'>{item.name}</h2>
                <span> Idade: <span className="primary-color">{item.age} anos</span></span><br/>
                <span> Arma Principal: <span className="primary-color">{item.swords}</span></span>
                <div className="story">{item.description}</div>
                <span>Apresentação</span>
                <div className="video relative">
                    <iframe
                        title='character spotlight'
                        ref={iframeRef}
                        width="90%"
                        ></iframe>
                </div>
            </div>
            <div className="character-detail__close" onClick={close}>
                <img src={closeIcon} alt='icone para fechar a seção'/>
            </div>
        </div>
    )
}

export default CharactersDetails