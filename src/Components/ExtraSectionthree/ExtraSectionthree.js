import React from 'react';
import img from '../ExtraSectionthree/three.png'
const ExtraSectionthree = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero min-h-screen navbar-bg">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} />
                    <div>
                        <h1 class="text-5xl font-bold">Purchase & Service</h1>
                        <p class="py-6">If you want to order products ,you have to follow some steps,first you have to sign up,if you  are new user,Go to sign up and make register.Then you can choose the product what you need.After payment,Our man pick your order.Thank You</p>
                        <ul class="steps steps-vertical">
                            <li class="step step-primary">Sign Up</li>
                            <li class="step step-primary">Purchaes Your Order</li>
                            <li class="step">Make Confirm</li>
                            <li class="step">Payment</li>
                            <li class="step">Then Pick Your Order</li>
                        </ul>

                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionthree;
