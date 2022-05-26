import React from 'react';
import img from '../Summary/summary.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking, faAward, faPenFancy, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
const Summary = () => {
    return (
        <div className='container mx-auto '>
            <div class="hero min-h-screen bg-card rounded-lg">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">Best collection all the time</h1>
                        <hr />
                        <p class="py-6 text-1xl text-primary font-bold ">We provide best bike parts all the time and there reserved best bike parts collection.We served thousand of customers still serving our best effort.We hope that that you will be grateful for our product.</p>
                        <p className='text-2xl'><span className='font-bold text-2xl'>Serving Customers
                        <FontAwesomeIcon className='text-orange-400 h-10' icon={faPersonBiking} />:
                        </span> 100+</p>

                        <p className='text-2xl'><span className='font-bold text-2xl'>Annual revenue
                        <FontAwesomeIcon className='text-orange-400 h-10' icon={faAward} />:
                        </span>100K+</p>

                        <p className='text-2xl'><span className='font-bold text-2xl'> Reviews
                        <FontAwesomeIcon className='text-orange-400 h-10' icon={faPenFancy} />:
                        </span>  0.5K+</p>

                        <p className='text-2xl'><span className='font-bold text-2xl'>Tools
                        <FontAwesomeIcon className='text-orange-400 h-10' icon={faMotorcycle} />:
                        </span>  10+</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
// The business summary will show some summary of your business. There could be 3/4 summary on this summary section. For example, we served 100+ customers, 120M+ Annual revenue, 33K+ Reviews, 50+ tools, etc. Make sure you use some relevant icons here. You can use Hero Icons, React Icons, Font Awesome, Bootstrap Icons, Daisy UI or any icons that you like. To see an example, you will find an image in the images folder of this repository.

