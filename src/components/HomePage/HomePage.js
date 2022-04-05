import React from 'react';
import { Link } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';

import './HomPage/HomePage.css'


const homePage = ({RevewsCard}) => {
    const SliceItem = (RevewsCard.slice(0, 3));



    return (
       
 <section>
 
        <div> 
        <div className='  columns-2 '>
<div className=' Hadding-text'>
    <h1>Your next Laptop</h1>
    <h2 className='text-indigo-700'> Your best Laptop</h2>
    <p>The Twelve South Curve stand is a beautiful, flowing aluminum design that complements your MacBook. Buy online now at apple.com</p>
 <button className='btn-live'> Live Demo</button>
</div>
<div className=' img-box'>
<img
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLST2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1596135470000'
              alt=''
            />

</div>
          
            
        </div>
        </div>

          
  <div className='mb-20'>
  <h1 className='text-center Customer-Reviews text-5xl'>Customer Reviews ({SliceItem.length})</h1>

<div className='Revews-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center mb-6 mt-20  px-20 '>
{
    SliceItem.map(RevewsCard=> <ShowCard key={RevewsCard.id} RevewsCard={RevewsCard}></ShowCard>)
}
</div>

<div className='Reviews-btn '>
<Link to="/Reviews"> <button className='text-amber-100 bg-orange-600 rounded-lg px-4 py-1'>  See All Reviews </button></Link>
</div>

  
  </div>
        </section>







    );
};

export default homePage;