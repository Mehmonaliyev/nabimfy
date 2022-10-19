import React from 'react'
import { FaUsers, FaUserFriends, FaChild } from 'react-icons/fa';

function Yangiqorgon(props) {
    return (
        <div>
            {/* more info */}
            <div className="more-info container  text-center">
                <h1 className='bg-primary text-white p-2 rounded-3'>{props.nomi}</h1>
                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-12 ">
                        <i className='d-flex align-items-center justify-content-center mx-auto'><FaUsers /></i>
                        <h4 className='color_b'><span className='color_black'>Umumiy Aholi soni:</span><br />{props.aholi}</h4>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-6 ">
                        <i className='d-flex align-items-center justify-content-center mx-auto'><FaUserFriends /></i>
                        <h4 className='color_b'><span className='color_black'>Kattalar:</span><br />{props.kattalar}</h4>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-6 ">
                        <i className='d-flex align-items-center justify-content-center mx-auto'><FaChild /></i>
                        <h4 className='color_b'><span className='color_black'>Yoshlar</span><br />{props.yoshlar}</h4>
                    </div>

                </div>
            </div>
            {/*  more info  finish*/}

        </div>
    )
}

export default Yangiqorgon
