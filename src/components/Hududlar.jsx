import React from 'react';
import MfyAholi from './Hududlar/MfyAholi';
import "./css/hudud.css"
import Yangiqorgon from './Hududlar/Yangiqorgon';

function Hududlar() {
    const hudud =[
        {id:1, nomi:"Baland Yangiqo'rg'on", aholi: "3 350" , kattalar: "1 775 ", yoshlar:"1 575"},
        {id:2, nomi:"Nabi", aholi: "1 353" , kattalar: "721", yoshlar:"632"},
        {id:3, nomi:"Qoqirchek", aholi: "650" , kattalar: "332 ", yoshlar:"318"}
    ]

    return (
        <div id='hududlar'>

            <MfyAholi />

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    {hudud.map( (h) => 
                    <Yangiqorgon 
                    key={h.id}
                    nomi={h.nomi}
                    aholi={h.aholi}
                    kattalar={h.kattalar}
                    yoshlar={h.yoshlar}
                    
                    />)}
          

                </div>
                <div className="col-lg-6 col-md-6 col-12">

                </div>
            </div>




        </div>
    )
}

export default Hududlar;