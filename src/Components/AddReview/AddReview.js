import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const ratings = e.target.ratings.value;
        console.log(ratings);
        if (ratings < 6) {
            const url = `https://whispering-sea-34909.herokuapp.com/reviews`;
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

            toast.success("The New Customer Review Added !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error("Plz provide ratings 1 to 5 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }

    };
    return (
        <div >
            <div class="card-body justify-center items-center navbar-bg">
                <br />
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-card p-4">
                    <div class="form-control">Add Reviews</div>
                    <div >
                        <label class="label">Name</label>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />

                        <label class="label">Ratings</label>
                        <input name='ratings' placeholder='Ratings' {...register("ratings")} className="input input-bordered w-full max-w-xs" type="number" />


                        <label class="label">Description</label>
                        <input placeholder='Your Reviews' {...register("reviews")} className="input input-bordered w-full max-w-xs" type="text" />

                        <label class="label">Img Link</label>
                        <input placeholder='Img Link' {...register("imageLink")} className="input input-bordered w-full max-w-xs mb-3" type="text" />


                        <button
                            className='btn btn-primary w-full max-w-xs text-white mx-auto ' type="submit">Add Reviews</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddReview;

