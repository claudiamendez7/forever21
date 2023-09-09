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
        document.querySelector(`#memb-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#memb-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
            id={`memb-detail-${props.id}`}
            className={`member-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="member-detail__content">
                <span>{item.stageName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Role: <span className="second-color">{item.role}</span></span>
                <br />
                <span>Korean Name: <span className="second-color">{item.koreanName}</span></span>
                <br />
                <span>Birth Date: <span className="second-color">{item.birthDate}</span></span>
                <br />                           
                <div className="story">{item.description}</div>                
            </div>
            <span>Member spotlight</span>
                <div className="video">
                    <iframe
                        title="member spotlight"
                        ref={iframeRef}
                        width="100%"
                    ></iframe>
                </div>            

            <div className="member-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="icon" />
            </div>          
        </div>
    )
}

export default MemberDetail