import './champion.scss';

import HomeSection from '../HomeSection';
import MemberCard from './MemberCard';

import { bg2 } from '../../../assets/images';
import { membersData } from '../../../assets/members';

import { Swiper, SwiperSlide } from 'swiper/react';

const Member = props => {
    return (
        <HomeSection
            className={`champion ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg2}
        >
            <div className="container relative">
                <div className="member-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            membersData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <MemberCard item={item} id={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Member