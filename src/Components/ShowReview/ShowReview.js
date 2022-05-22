import React from 'react';

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
                    <h4>Ratings:{ratings}</h4>
                    <p>{reviews}</p>

                </div>
            </div>
        </div>
    );
};

export default ShowReview;