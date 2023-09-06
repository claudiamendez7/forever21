import './credit.scss';

import { useRef, useEffect } from 'react';

import { bgDc } from '../../../assets/videos';
import Button from '../../button/Button';

const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgDc} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Check on</span>
                    <h2 className="main-color">DREAMCATCHER</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">JUST CLICK</Button>
                    <Button className="btn-second">WELCOME TO THE DREAMWORLD</Button>
                </div>
            </div>
        </div>
    )
}

export default Credit