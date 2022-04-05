import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className='p-20'>  
 <h1 className='text-4xl mb-3'> What is the Contacts API?</h1>
           <p className='mb-4'>
In HubSpot, contacts store information about an individual. From marketing automation to smart content, the lead-specific data found in contact records helps users leverage much of HubSpot's functionality. The Contacts API allows you to manage this data and sync it between HubSpot and other systems.

Use case for this API: Your team is using HubSpot and another software system for their work. They need accurate contact information in both systems, but don't want to spend time making manual updates. You use the Contacts API to integrate the two systems and sync contact information. </p>
            
        </div>

<div className='p-20'>
<h1 className='text-4xl mb-3'>What are semantic tags</h1>

    <p className='mb-3'>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.</p>


</div>

<div className='p-20'>
<h1 className='text-4xl mb-3'> differences between block inline and inline-block elements?</h1>
<p className='mb-3'>The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element. There’s a bunch of property values. But let’s start off with the essential inline.

This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.</p>
</div>

        </div>
    );
};

export default Blogs;