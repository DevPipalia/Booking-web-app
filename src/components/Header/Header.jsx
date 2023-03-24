import "./header.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Header(){
    const [text] = useTypewriter({
        words: ['my therapy', 'escape from reality', 'discovering myself'],
        loop:10,
        typeSpeed:40,
        deleteSpeed:40
      })
    return(
        <>
        <div className="header">
            <div className="header-items">
                <FontAwesomeIcon className="header-item" icon={faBed} />
                <span>Stays</span>
                <FontAwesomeIcon className="header-item" icon={faPlaneDeparture} />
                <span>Flights</span>
                <FontAwesomeIcon className="header-item" icon={faCar} />
                <span>Cars</span>
                <FontAwesomeIcon className="header-item" icon={faBuilding} />
                <span>Attractions</span>
                <FontAwesomeIcon className="header-item" icon={faTaxi} />
                <span>Taxis</span>
            </div>
        <span>Travel is </span>
        <span>{text}</span>
        <Cursor cursorStyle="🤗"  cursorBlinking={false}/>
        </div>
        </>
    )
}

export default Header;