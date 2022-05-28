import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ShowReview = (props) => {
    const { Name, imageLink, ratings, reviews } = props.review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl bg-card">
                <figure class="px-10 pt-10">
                    <img src={imageLink} class="h-20 w-20 rounded-full" />

                </figure>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{Name}</h2>
                    <h4>Ratings:{ratings}   <FontAwesomeIcon className='text-amber-400 h-5' icon={faStar} /></h4>
                    <p>{reviews}</p>

                </div>
            </div>
        </div>
    );
};

export default ShowReview;