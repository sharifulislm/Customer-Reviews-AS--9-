import React from 'react'

import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
  return (
    <div className='sticky top-0 bg-white px-12 py-8 flex justify-center '>
      <div className='hidden md:block'>
    
      </div>
      <div className='flex gap-4 text-xl'>
        <CustomLink to='/'>HOME</CustomLink>
        <CustomLink to='/Reviews'>REVIEWS</CustomLink>
        <CustomLink to='/Dasboard'>DASBOARD</CustomLink>
        <CustomLink to='/Blogs'>BLOGS</CustomLink>
        <CustomLink to='/about'>ABOUT</CustomLink>
      </div>
    </div>
  )
}

export default Header
