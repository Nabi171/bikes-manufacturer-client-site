import React from 'react';

const SectionOne = () => {
    return (
        <div className="container mx-auto">
            <div class="hero min-h-screen bg-card rounded-lg">
                <div class="hero-content  flex-col lg:flex-row-reverse">
                    <div class="text-center pl-20 lg:text-left">
                        <h1 class="text-5xl font-bold">Subscribe Now</h1>
                        <p class="py-6 text-1xl font-bold text-primary">Thanks honourable for choosing the product from here,we have best collection which has international quality.We will be indebted to you if you get connected by subscribing there for future notificatio.Thank you.</p>

                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;