import './member-detail.scss';

import { closeIcon } from '../../../assets/images';
import { useRef, useEffect } from 'react';

const MemberDetail = props => {

    const item = props.item
    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const onClose = () => {
        document.querySelector(`#member-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#member-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
            id={`member-detail-${props.id}`}
            className={`member-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="member-detail__content">
                <span>{item.stageName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Role: <span className="second-color">{item.role}</span></span>
                <br />
                <span>Korean Full Name: <span className="second-color">{item.koreanFullName}</span></span>
                <br />
                <span>Birth Date: <span className="second-color">{item.birthDate}</span></span>
                <br />
                <span>Description: <span className="second-color">{item.description}</span></span>
                <div className="story">
                    {item.description}
                </div>
                
            </div>
            <div className="champion-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="" />
            </div>          
        </div>
    )
}

export default MemberDetail