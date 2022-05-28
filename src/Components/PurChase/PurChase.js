import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
const PurChase = () => {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const { id } = useParams();

    const [tool, setTool] = useState([]);

    useEffect(() => {
        const url = `https://whispering-sea-34909.herokuapp.com/tools/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTool(data));
    }, []);

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        let availableQuantity = e.target.availableQuantity.value;
        if (availableQuantity < tool.minimumOrder) {
            alert(`You Cant order less than ${tool.minimumOrder} item`);
            // availableQuantity = ' ';
        } else if (availableQuantity > tool.availableQuantity) {
            alert(`You Cant order more than ${tool.availableQuantity} item`);
            // availableQuantity = ' ';
        }
        //lets handle price
        const price = e.target.price.value * availableQuantity;
        // console.log(address, phone, availableQuantity);
        let order = { name, email, address, phone, availableQuantity, price };
        console.log(order);

        //now applying the post method
        const url = `https://whispering-sea-34909.herokuapp.com/bookedTools`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert(`Order Recieved Successfully for ${tool.Name}`);
                    navigate('/home');
                } else {
                    alert(`You have placed order for ${tool.Name}`);
                }
            });

    }


    return (
        <div >
            <div className=" pt-24 pb-24 navbar-bg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* for tool/product details */}

                    <div className="flex justify-center items-center">
                        <div class="card lg:w-96 sm:max-w-sm bg-orange-100 shadow-xl">
                            <figure>
                                <img src={tool.imageLink} alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {tool.name}
                                    <div class="badge badge-primary">NEW</div>
                                </h2>
                                <h3 className="">Description : {tool.description}</h3>
                                <h2 className="text-2xl">Price per Item: ${tool.price}</h2>
                                <h3 className="text-xl">Minimum Order : {tool.minimumOrder}</h3>
                                <h3 className="text-xl">
                                    Available Quantity : {tool.availableQuantity}
                                </h3>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center items-center pt-6 pl-10 pr-2">
                        <div className="container mx-auto pb-16">
                            <h2 className="text-3xl mb-6 font-extrabold">
                                Place Your Order Here For : {tool.name}
                            </h2>
                            <form className="card shadow-xl p-4 bg-orange-100" onSubmit={handleConfirmOrder}>
                                <div>
                                    <label class="label">
                                        <span class="label-text">What is your name?</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder='Name'
                                        value={
                                            user.displayName ? user.displayName : "RandomUser"
                                        }
                                        class="input input-bordered input-primary w-full max-w-xs text-xl text-accent font-bold"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='email'
                                        placeholder='Email'
                                        value={user ?.email || ""}
                                        class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        name='address'
                                        class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        name='phone'
                                        class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                                    />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Product Quantiy</span>
                                    </label>
                                    <input

                                        type="number"
                                        placeholder="Number of product you purchase"
                                        name="availableQuantity"
                                        class="input input-bordered input-primary w-full max-w-xs text-accent font-bold "
                                    />
                                    <label class="label">
                                        <span class="label-text"></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Product Price</span>
                                    </label>
                                    <input

                                        type="number"
                                        placeholder="Prices of Your product"
                                        name="price"
                                        value={tool.price}
                                        class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                                    />
                                    <label class="label">
                                        <span class="label-text"></span>
                                    </label>
                                </div>

                                <div>
                                    <button class="btn w-1/4 btn-primary text-white">Confirm Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurChase;
