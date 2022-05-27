import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-sea-34909.herokuapp.com/reviews').then(res => res.json()).then(data => setReviews(data))
    }, []);
    return (
        <div className="bgallCard">
            <br />
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        reviews.slice(0, 6).map(review =>
                            <ShowReview
                                key={review._id} review={review}
                            ></ShowReview>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;


