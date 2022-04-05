import React from 'react';


const ReviewProducts = ({RevewsCard}) => {

    const {id,picture,RevewsRating,name,Revews}= RevewsCard;
    return (
<div className='shadow-lg rounded-2xl w-[350px]  bg-white p-4 mb-7'>
<p className='mb-5'> {Revews}</p>
  <div className='gap-4 flex justify-between items-center'>
    <div className='flex-shrink-0'>
      <div>
        <img
          alt='profile'
          src={picture}
          className='mx-auto object-cover rounded-full h-16 w-16 '
        />
      </div>
    </div>
    <div className=' flex flex-col justify-center'>
      <span className='text-gray-600 font-medium'>{name}</span>
      <span className='text-gray-400 text-xs'>{RevewsRating} <span className='text-amber-400'>Star</span></span>
    </div>
  </div>

</div>
// </div>


    );
};

export default ReviewProducts;