import { useRef } from 'react';
import './member-card.scss';

const MemberCard = props => {

    const cardRef = useRef(null)

    const item = props.item

    const onClick = () => {
        const img = cardRef.current.querySelector('img')
        const pos = img.getBoundingClientRect()

        const newNode = img.cloneNode(true)
        newNode.style.width = img.offsetWidth + 'px'
        newNode.style.height = img.offsetHeight + 'px'
        newNode.style.position = 'absolute'
        newNode.style.top = pos.top + 'px'
        newNode.style.left = pos.left + 'px'
        newNode.style.zIndex = '102'

        newNode.style.transition = 'all 0.7s ease'
        newNode.id = `memb-img-${props.id}`

        setTimeout(() => {
            newNode.style.width = 'auto'
            newNode.style.height = '100%'
            newNode.style.top = 0
            newNode.style.left = 0
        },)

        document.body.appendChild(newNode)

        const videoUrl = `https://youtube.com/embed/${item.video}`
        document.querySelector(`#memb-detail-${props.id} iframe`).setAttribute('scr', videoUrl)
        document.querySelector(`#memb-detail-${props.id}`).classList.add('active')
    }

    return (
        <div className="member-card" onClick={onClick} ref={cardRef}>
            <div className="frame">
                <div className="bg-image overlay bg" style={{backgroundImage: `url(${item.bg})`}}></div>
            </div>
            <img src={item.img} alt="card" />
            <div className="name">{item.name}</div>
        </div>
    )
}

export default MemberCard