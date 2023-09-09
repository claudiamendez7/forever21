import './member-detail.scss';

import { closeIcon } from '../../../assets/images';

const MemberDetail = props => {

    const item = props.item

    const onClose = () => {
        document.querySelector(`#memb-detail-${props.id}`).classList.remove('active')

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

            <div className="member-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="icon" />
            </div>          
        </div>
    )
}

export default MemberDetail