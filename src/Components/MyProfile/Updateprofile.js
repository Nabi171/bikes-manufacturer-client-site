import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const Updateprofile = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {


        const url = `http://localhost:4000/updateProfile`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        toast.success("Congratulations!!Your profile updated", {
            position: toast.POSITION.TOP_CENTER
        });



    };
    return (
        <div >
            <div class="card-body justify-center items-center navbar-bg">
                <br />
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-card p-4">
                    <div class="form-control">Update Your Profile</div>
                    <div >
                        <label class="label">Education</label>
                        <input className="input input-bordered w-full max-w-xs" type="text" placeholder='Education' {...register("education", { required: true, maxLength: 20 })} />

                        <label class="label">Location</label>
                        <input name='ratings' placeholder='Location' {...register("Location")} className="input input-bordered w-full max-w-xs" type="text" />


                        <label class="label">Phone Number</label>
                        <input placeholder='Your Reviews' {...register("phoneNumber")} className="input input-bordered w-full max-w-xs" type="number" />

                        <label class="label">Linkdein Profile Link</label>
                        <input placeholder='Linkdein Profile Link' {...register("linkdeinLink")} className="input input-bordered w-full max-w-xs mb-3" type="text" />


                        <button
                            className='btn btn-primary w-full max-w-xs text-white mx-auto ' type="submit">Update Your Profile</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Updateprofile;
