import React from 'react'
import Card from './Card';
import r1 from "./img/rais.jpg";
import r2 from "./img/yoshlar yetakchisi.jpg";
import r3 from "./img/hokim yordamchisi.jpg";
import r4 from "./img/xotin qizlar faoli.jpg";
import r5 from "./img/uchatkavoy.jpg";


function Faollar() {

    const cards = [
        { id: 1, ism: "Adhamjon Po'latov Qosimjon o'g'li ", unvoni: "Rais", brithday: "----", tell: "+998 93 371 97 11", rasm: r1, tg: "-----" },
        { id: 2, ism: "Soliyev Beknazar Baxodirjon o'g'li ", unvoni: "Yoshlar yetakchisi", brithday: "15.07.1992", tell: "+998 93 973 09 08", rasm: r2, tg: "beknazar064" },
        { id: 3, ism: "Abdusoliyev Otajon Husanboyevich", unvoni: "Hokim yordamchisi", brithday: "----", tell: "+998 94 494 81 18", rasm: r3, tg: "otabekabdusoliyev" },
        { id: 4, ism: " Ortiqova Sarvinoz Abdulatifovna ", unvoni: "Xotin-qizlar faoli", brithday: "17.08.1988", tell: "+998 93 645 88 47", rasm: r4, tg: "ortiqovasarvinoz" },
        { id: 5, ism: "Samijonov Mirkomil Ulug'bek o'g'li ", unvoni: "Profilaktika inspektori", brithday: "----", tell: "+998 91 326 21 21", rasm: r5, tg: "" },


    ]
    return (
        <div id='mahalla' className='pt-5'>
                <h2 className='text-center mt-4' >Mahalla faollari</h2>
            <div className="row container mx-auto d-flex justify-content-center">

                {cards.map((car) =>

                    <div className="col-lg-4 p-3 col-md-6 col-sm-12">


                        <Card
                            key={car.id}
                            rasm={car.rasm}
                            ism={car.ism}
                            unvoni={car.unvoni}
                            brithday={car.brithday}
                            tell={car.tell}
                            tg={car.tg}
                        />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Faollar
