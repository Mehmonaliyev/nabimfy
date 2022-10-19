import React from 'react'
import { FaUsers, FaUserFriends, FaChild } from 'react-icons/fa';
import r1 from "../img/r1.jpg";
import r2 from "../img/r4.jpg";
import r3 from "../img/r3.jpg";



function MfyAholi() {
    return (
        <div className='container mt-5'>
            <h2 className='text-center'>NABI MFY    UMUMIY AHOLISI VA U HAQIDA</h2>

            <div className="row">
                <div className="col-lg-6">
                    <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" id='carousel-item' data-bs-interval="10000">
                                <img src={r1} className="d-block w-100 img h-50" alt="..." />
                            </div>
                            <div className="carousel-item" id='carousel-item' data-bs-interval="2000">
                                <img src={r3} className="d-block w-100 img h-50" alt="..." />
                            </div>
                            <div className="carousel-item" id='carousel-item'>
                                <img src={r2} className="d-block w-100 img h-50" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* more info */}
                    <div className="more-info container  text-center">

                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-12 ">
                                <i className='d-flex align-items-center justify-content-center mx-auto'><FaUsers /></i>
                                <h4 className='color_b'><span className='color_black'>Umumiy Aholi soni:</span><br />3 350</h4>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-6 ">
                                <i className='d-flex align-items-center justify-content-center mx-auto'><FaUserFriends /></i>
                                <h4 className='color_b'><span className='color_black'>Kattalar:</span><br /> 1 775 </h4>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-6 ">
                                <i className='d-flex align-items-center justify-content-center mx-auto'><FaChild /></i>
                                <h4 className='color_b'><span className='color_black'>Yoshlar</span><br />1 575</h4>
                            </div>
                            <div className="col-12">
                                <p >Nabi mahalla fuqarolar yig'ining web sahifasiga hush kelibsiz. Siz ushbu web saytda NABI MFY haqida o'zinggiz uchun kerakli malumotlarga ega bo'lasiz.

                                </p>

                                <ul className='text-start q' type="dick">

                                    <li>NABI MFY 3 ta qishloqni o'z ichiga oladi:</li>
                                    <ul type="circle">
                                        <li >Baland Yangiqo'rg'on</li>
                                        <li>Nabi</li>
                                        <li>Qoqirchek</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  more info  finish*/}

                </div>
            </div>
        </div>
    )
}

export default MfyAholi
