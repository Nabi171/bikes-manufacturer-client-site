import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Showprofile = (props) => {

    const { education, Location, phoneNumber, linkdeinLink } = props.upuser;
    const [myProfile, setMyprofile] = useState([]);
    const user = useAuthState(auth);


    useEffect(() => {

        fetch("http://https://whispering-sea-34909.herokuapp.com/updateProfile", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setMyprofile(data))

    }, [])


    const id = useParams();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://https://whispering-sea-34909.herokuapp.com/updateProfile/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = myProfile.filter(item => item._id !== id);
                    setMyprofile(rest);
                })
        }
    }
    return (
        <div>
            <p><span className='font-bold'>Education Institutation:</span>{education}</p>
            <p><span className='font-bold'>Location:</span>{Location}</p>
            <p><span className='font-bold'>Phone Number:</span>{phoneNumber}</p>
            <p><span className='font-bold'>Linkdein Link:</span>{linkdeinLink}</p>

        </div>
    );
};

export default Showprofile;