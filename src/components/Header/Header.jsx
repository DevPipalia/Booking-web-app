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



function Header({type}){
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
      const[openOptions,setOpenOptions]=useState(false)
      const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
      })

      const handleOption=(name, operation)=>{
        setOptions(prev=>{return{
          ...prev,
          [name]:operation==="i"?options[name]+1:options[name]-1,
        };
      }
      );
      }



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
        <span className="header-text-1">Travel is </span>
        <span className="header-typewriter">{text}</span>
        <Cursor cursorStyle="🤗"  cursorBlinking={false}/>
        <p className="header-text-2">Hub for best prices, Medium of best experiences </p>
        </div>
        </div>
        { type!=="list" &&
        <>
          <div className="header-search">
         <div className="header-search-item">
            <FontAwesomeIcon className="icon" icon={faMountain} />
             <input type="text" placeholder="Where are you travelling" className="header-search-input"/>
            </div>
            <div className="header-search-item date-item" onClick={()=>setOpendate(!openDate)}>
            <FontAwesomeIcon className="icon" icon={faCalendar} />
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
            <FontAwesomeIcon className="icon" icon={faPerson} />
             <span onClick={()=>setOpenOptions(!openOptions)} className="open-options">{`${options.adult}adult~ ${options.children}children~  ${options.room}room(s)`}</span>
             {openOptions&&<div className="options">
               <div className="option-item">
                  <span>Adults</span>
                  <span className="option-counter-number">{options.adult}</span>
                  <button className="option-button-counter" onClick={()=> handleOption("adult","d")}>-</button>
                  <button className="option-button-counter" onClick={()=> handleOption("adult","i")}>+</button>
               </div>
               <div className="option-item">
                  <span>Children</span>
                  <span className="option-counter-number" >{options.children}</span>
                  <button className="option-button-counter" onClick={()=> handleOption("children","d")} >-</button>
                  
                  <button className="option-button-counter" onClick={()=> handleOption("children","i")}>+</button>
               </div>
               <div className="option-item">
                  <span>Rooms</span>
                  <span className="option-counter-number">{options.room}</span>
                  <button className="option-button-counter" onClick={()=> handleOption("room","d")}>-</button>
                  <button className="option-button-counter" onClick={()=> handleOption("room","i")}>+</button>
               </div>
             </div>}
             </div>
              
             <div className="header-search-item">
             <button>Search</button>
             </div>

          </div></>}

        </>
    )
}

export default Header;