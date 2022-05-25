import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router';
const Myorder = () => {
    const [user] = useAuthState(auth);

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch("http://localhost:4000/bookedTools", {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [])


    const id = useParams();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:4000/bookedTools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = myOrders.filter(item => item._id !== id);
                    setMyOrders(rest);
                })
        }
    }





    return (
        <div className="navbar-bg">
            <div className="container mx-auto ">
                <div class="overflow-x-auto ">
                    <h2 className="text-2xl text-center pb-6 font-bold"> You Have Confirmed {myOrders.length} Orders</h2>

                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>serial</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>price</th>
                                <th>Do you wanna cancel the order?</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myOrders.map((myOrder, index) => <tr key={myOrder._id}>
                                    <th>{index + 1}</th>
                                    <td>{myOrder.name}</td>
                                    <td>{myOrder.email}</td>
                                    <td>{myOrder.price}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => handleDelete(myOrder._id)}>Cancel Order</button>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myorder;

