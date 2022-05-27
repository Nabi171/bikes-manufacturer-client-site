import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../Navbar/logo.png'
import Showprofile from './Showprofile';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updatedUser, setUpdatedUser] = useState([]);
    useEffect(() => {
        fetch('https://whispering-sea-34909.herokuapp.com/updateProfile').then(res => res.json()).then(data => setUpdatedUser(data));
    }, [])
    console.log(user);
    return (
        <div className="flex justify-center items-center h-screen navbar-bg">
            <div class="card lg:w-full sm:max-w-sm bg-orange-100 shadow-xl">
                <figure>
                    <div class="avatar online">
                        <div class="w-32 rounded-full">
                            <img src={img} />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Wellcome To {user.displayName}
                        <div class="badge badge-primary">profile</div>
                    </h2>
                    <p><span class="text-black">Email</span>{user.email}</p>
                    {/* <p>{updatedUser.education}</p> */}
                    {updatedUser ? <div>
                        {updatedUser.slice(0, 1).map(upuser =>
                            <Showprofile
                                key={upuser._id}
                                updatedUser={updatedUser}
                                setUpdatedUser={setUpdatedUser}
                                upuser={upuser}></Showprofile>
                        )}
                    </div>
                        : ''

                    }



                </div>
            </div>
        </div>

    );
};

export default MyProfile;