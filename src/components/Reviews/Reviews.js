import React from 'react';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Reviews = ({RevewsCard}) => {

    return (
        <div>
             <h3>Customers Revews</h3>
            

            <div>

{
    RevewsCard.map(RevewsCard => <ReviewProducts key={RevewsCard.id} RevewsCard={RevewsCard}> </ReviewProducts>)
}

            </div>
        </div>
    );
};

export default Reviews;