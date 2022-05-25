import React from 'react';

const Showprofile = (props) => {
    const { education, Location, phoneNumber } = props.upuser;
    return (
        <div>
            <p><span className='font-bold'>Education Institutation:</span>{education}</p>
            <p><span className='font-bold'>Education Institutation:</span>{Location}</p>
            <p><span className='font-bold'>Education Institutation:</span>{phoneNumber}</p>
        </div>
    );
};

export default Showprofile;