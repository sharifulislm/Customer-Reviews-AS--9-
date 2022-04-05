import React from 'react';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Reviews = ({RevewsCard}) => {

    return (
        <div>
             <h3 className='text-center Customer-Reviews text-5xl mb-12'>Customers Revews({RevewsCard.length})</h3>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center mb-6'>

{
    RevewsCard.map(RevewsCard => <ReviewProducts key={RevewsCard.id} RevewsCard={RevewsCard}> </ReviewProducts>)
}

            </div>
        </div>
    );
};

export default Reviews;