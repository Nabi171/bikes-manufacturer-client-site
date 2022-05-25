import React from 'react';
import img from '../Notfound/404.jpg';
import { useNavigate } from 'react-router';
const NotFound = () => {
    const navigate = useNavigate();
    return (

        <div className="flex justify-center items-center h-screen navbar-bg">
            <div class="card lg:w-full sm:max-w-sm bg-orange-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        opps content notfound
                    <div class="badge badge-primary">404</div>
                    </h2>
                    <button onClick={() => navigate('/home')} className='btn btn-primary'>Home</button>
                </div>
            </div>
        </div>



    );
};

export default NotFound;



