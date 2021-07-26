import React from 'react';
import Card from 'react-bootstrap/Card';
import './Location.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';


export default function Location() {
    return (
        <div className="loc">
            <>
            <Card style={{ width: '250px' }} className="loc-card">
            <Card.Body>
                <Card.Title className="title"><GoLocation />   Noida, India <span className="pen"><FontAwesomeIcon icon="pen" /></span></Card.Title>
                <hr/>
                <Card.Text className="txt"><AiOutlineExclamationCircle />  Your location will help us serve better and extend a personalised experience.
                </Card.Text>
            </Card.Body>
            </Card>
            </>
        </div>
    )
}
