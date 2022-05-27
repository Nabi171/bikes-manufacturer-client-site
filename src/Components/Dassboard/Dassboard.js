import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile navbar-bg">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-extrabold text-primary'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side navbar-bg">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">Dassboard</Link></li>


                    {!admin &&
                        <>
                            <li><Link to="/dashboard/myOrder">My Orders</Link></li>
                            <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                            <li><Link to="/dashboard/addreviews">Add Reviews</Link></li>
                            <li><Link to="/dashboard/allreviews">Reviews</Link></li>
                            <li><Link to="/dashboard/updatedProfile">Update Profile</Link></li>


                        </>

                    }


                    {user &&
                        <>

                        </>

                    }



                    {admin &&
                        <>
                            <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                            <li><Link to="/dashboard/allproduct">All Product</Link></li>
                            <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                            <li><Link to="/dashboard/users">Users</Link></li>
                            <li><Link to="/dashboard/manageProducts">ManageProducts</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;