import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const url = `https://whispering-sea-34909.herokuapp.com/tools`;
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

        toast.success("The New product added !", {
            position: toast.POSITION.TOP_CENTER
        });







    };
    return (
        <div >
            <div class="card-body justify-center items-center navbar-bg">
                <br />
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-card p-4">
                    <div class="form-control">Add Product</div>
                    <div >
                        <label class="label">Product Name</label>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />

                        <label class="label">Price</label>
                        <input name='price' placeholder='Ratings' {...register("price")} className="input input-bordered w-full max-w-xs" type="number" />


                        <label class="label">Available Quantity</label>
                        <input placeholder='availableQuantity' {...register("availableQuantity")} className="input input-bordered w-full max-w-xs" type="text" />

                        <label class="label">MinimumOrder</label>
                        <input placeholder='minimumOrder' {...register("minimumOrder")} className="input input-bordered w-full max-w-xs mb-3" type="text" />

                        <label class="label">Description</label>
                        <input placeholder='description' {...register("description")} className="input input-bordered w-full max-w-xs mb-3" type="text" />

                        <label class="label">ImageLink</label>
                        <input placeholder='imageLink' {...register("imageLink")} className="input input-bordered w-full max-w-xs mb-3" type="text" />


                        <button
                            className='btn btn-primary w-full max-w-xs text-white mx-auto ' type="submit">Add Product</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddProduct;


