import React from 'react';

const Showprofile = (props) => {

    const { education, Location, phoneNumber } = props.upuser;
    const [myProfile, setMyprofile] = useState([]);
    const id = useParams();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:4000/updatedProfile/${id}`;
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
            <button className='btn btn-primary' onClick={() => handleDelete(myProfile._id)}>Delete This Info</button>
        </div>
    );
};

export default Showprofile;