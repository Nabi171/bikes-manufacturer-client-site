import React from 'react';
import img from '../Banner/banner.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen  navbar-bg">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg " />
                <div>
                    <h1 class="text-5xl font-bold">PELVIC MANUFACTURER BIKE ZONE</h1>
                    <p class="py-6 text-1xl  font-bold ">Wellcome to this site.Here You get the different parts of bike and here you get the instruments of bike.There reserved best collection of different parts of bike,So checkout what you need,the choise is yours..</p>
                    <button class="btn btn-primary">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;



