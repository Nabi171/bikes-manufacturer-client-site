import React from 'react';

import { useForm } from "react-hook-form";
const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <div class="card-body">
                <br />
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-card">
                    <div class="form-control">Add Phones</div>
                    <div >
                        <label class="label">Phone Name</label>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />

                        <label class="label">Ratings</label>
                        <input placeholder='Ratings' {...register("ratings")} className="input input-bordered w-full max-w-xs" type="number" />



                        <label className='form-label'>Description</label>
                        <input placeholder='Description' {...register("description")} className="input input-bordered w-full max-w-xs" type="text" />

                        <label className='form-label'>Img Link</label>
                        <input placeholder='Img Url' {...register("imageLink")} className="input input-bordered w-full max-w-xs" type="text" />

                        <button
                            className='btn btn-primary w-full max-w-xs text-white mx-auto' type="submit">Add Phones</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddReview;

