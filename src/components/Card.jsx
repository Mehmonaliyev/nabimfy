import React from 'react'
import "./css/card.css"
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillCalendarWeekFill, BsTelegram } from 'react-icons/bs';


function Card(props) {
    return (
        <div>
            <div className="card">
                
                <img src={props.rasm} />
                 <h3 className='text-primary'>{props.unvoni}</h3>
                <p className="title">{props.ism}</p>
                <p><BsFillCalendarWeekFill/> {props.brithday}</p>
                <div > 
                    <p> <a  href={props.tg} className="text-primary"><BsTelegram/>  @{props.tg}</a></p>
                </div>
               <p><button className="btn btn-primary w-75"><FiPhoneCall /> {props.tell}</button></p> 
            </div> 

        </div>
    )
}

export default Card
