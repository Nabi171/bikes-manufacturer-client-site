import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';
// import { loadStripe } from '@stripe/stripe-js';
// import {

//     Elements

// } from '@stripe/react-stripe-js';
// import CheckOut from '../CheckOut/CheckOut';
// import CheckoutForm from './CheckoutForm';
// const stripePromise = loadStripe('pk_test_51L13iBHDWBflbIhzJ8lKYBqeh9rtmnBCW4Iwv7ok0SFETMV2EqVUvw4QXrPCvNMMebuirtKliMHe8DUX8HVwAIzk003cE0oHJX');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:4000/bookedTools/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>

            <div class="card w-50 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    {/* <p className='text-success font-bold'>Hello,{appointment.}</p>
                    <h2 class="card-title">Pay for {appointment.treatment} </h2>
                    <p>Your appointment <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p> */}
                    <div class="card-actions justify-end">
                        <p>please pay :${appointment.price}</p>
                    </div>
                </div>
            </div>
            {/* <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckOut appointment={appointment} />
                    </Elements>
                </div>
            </div> */}
        </div>

    );
};

export default Payment;