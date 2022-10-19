import React from 'react'

function Menu() {
    return (
        <div>


           

            <nav class="navbar navbar-expand-lg text-white  fixed-top" id='bg' >
            <div class="container ">
                <a class="navbar-brand " href="#"><b className='text-white '>NABI MFY</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0  ">
                        <li class="nav-item">
                            <a class="nav-link "  aria-current="page" href="#">Bosh sahifa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#mahalla">Mahalla faollari</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#hududlar">Hududlar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link "  href="#">Disabled</a>
                        </li>
                    </ul>

                    <div>
                        setting
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Menu
