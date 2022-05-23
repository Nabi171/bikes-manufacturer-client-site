import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="navbar-bg">
            <div className="navbar-bg">
                <div class="card w-96 bg-base-100 shadow-xl mx-auto items-center justify-center ">
                    <figure class="px-10 pt-10">
                        <img src={user.photoUrl} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{user.displayName}</h2>
                        <p><span class="text-black">Email</span>{user.email}</p>
                        <p><span class="text-black">Email</span>{user ?.phoneNumber}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;