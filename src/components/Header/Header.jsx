import "./header.css"
import React from "react"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from "date-fns/format";



function Header(){
    const [text] = useTypewriter({
        words: ['my therapy', 'escape from reality', 'discovering myself','HERE'],
        loop:10,
        typeSpeed:40,
        deleteSpeed:40
      })
      const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openDate,setOpendate]=useState(false)
    return(
        <>
        <div className="header">
            <div className="header-items">
             <div className="header-button">
                <FontAwesomeIcon className="header-item" icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="header-button">
                <FontAwesomeIcon className="header-item" icon={faPlaneDeparture} />
                <span>Flights</span>
                </div>
                <div className="header-button">
                <FontAwesomeIcon className="header-item" icon={faCar} />
                <span>Cars</span>
                </div>
                <div className="header-button">
                <FontAwesomeIcon className="header-item" icon={faBuilding} />
                <span>Attractions</span>
                </div>
                <div className="header-button">
                <FontAwesomeIcon className="header-item" icon={faTaxi} />
                <span>Taxis</span>
                </div>
            </div>
           <div> 
        <span>Travel is </span>
        <span>{text}</span>
        <Cursor cursorStyle="🤗"  cursorBlinking={false}/>
        <p>Hub for best prices, Medium of best experiences </p>
        </div>
        </div>
        <div className="header-search">
         <div className="header-search-item">
            <FontAwesomeIcon icon={faMountain} />
             <input type="text" placeholder="Where are you travelling" className="header-search-input"/>
            </div>
            <div className="header-search-item date-item" onClick={()=>setOpendate(!openDate)}>
            <FontAwesomeIcon icon={faCalendar} />
             <span>{`${format(date[0].startDate,"dd/MM/yy")} to ${format(date[0].endDate,"dd/MM/yy")}`}</span>
             {openDate&&<DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date-input"
                />}
             </div>
             <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} />
             <span>2 Adults 2 Children 1 room</span>
             </div>
             <div className="header-search-item">
             <button>Search</button>
             </div>

        </div>

        </>
    )
}

export default Header;