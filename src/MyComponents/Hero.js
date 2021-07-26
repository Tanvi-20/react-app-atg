import React from 'react';
import Image from 'react-bootstrap/Image';
import './Hero.css';
import rect2 from './img1.svg';
import Button from 'react-bootstrap/Button'

export default function Hero() {
    return (
        <div className="hero">
            <>
            <Image src={rect2} fluid />
            <p className="hero-text">Computer Engineering</p>
            <p className="small">142,765 Computer Engineers follow this</p>
            </>
        </div>
    )
}
