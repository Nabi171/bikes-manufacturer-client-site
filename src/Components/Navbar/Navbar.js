import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from '@firebase/auth';
import img from '../Navbar/logo.png'
const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const logout = () => {
        signOut(auth);
    };
    const navParts = <>
        <li><Link className='font-black' to="/">Home</Link></li>
        <li><Link className='font-black' to="/dashboard">Dassboard</Link></li>
        <li><Link className='font-black' to="/blogs">Blogs</Link></li>
        <li><Link className='font-black' to="/register">Register</Link></li>
        <li><Link className='font-black' to="/portfolio">Portfolio</Link></li>
        <li>{user ?
            <button className='font-black' onClick={logout} >Sign Out</button>

            : <Link className='font-black' to="/login">Login</Link>}</li>
        <li>{user &&

            <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">{user.displayName}</span>
                </div>
            </div>

        }</li>

    </>
    return (
        <div className="navbar bg-base-100 navbar-bg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navParts}
                    </ul>
                </div>

                <img src={img} className="w-32" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navParts}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;