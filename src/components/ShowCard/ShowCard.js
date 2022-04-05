import React from 'react';
import './ShowCard.css'

const ShowCard = ({RevewsCard}) => {

      
    const {id,picture,RevewsRating,name,Revews}= RevewsCard;
 



   
   

   

    return (
        <div className='Revews-box p-6'>
            <div>

           
<p className='mb-8'> {Revews.slice(0, 150)}...</p>

<div className='flex content-start'>
<img className='w-20'  src={picture} alt="" />
<h1 className='pt-6 pl-4'> {name}</h1>

</div>

<h4 className='text-center p-1 '> Ratings: <span className='text-amber-800'>{RevewsRating}</span> <span className='text-amber-400'>Star</span></h4>


 </div>
 </div>







            
       
    );
};

export default ShowCard;