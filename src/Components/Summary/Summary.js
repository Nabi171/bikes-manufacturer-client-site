import React from 'react';
import img from '../Summary/summary.png'
const Summary = () => {
    return (
        <div className='container mx-auto '>
            <div class="hero min-h-screen bg-card rounded-lg">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <hr />
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;