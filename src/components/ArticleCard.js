import React from 'react'
import img from '../assets/articles/relationships.png'
import wellness1 from '../assets/articles/wellness1.jpg';
const ArticleCard = () => {
  return (
    <div className='flex flex-col'>
        <div className='relative'>
            <img src={wellness1} className='h-64 w-72'/>
            <p className='bg-white rounded-full px-4 py-1 m-2 top-0 absolute'>Wellness</p>
            <p className='font-semibold text-lg text-'>How to cope up with childbirth trauma triggers</p>
        </div>
    </div>
  )
}

export default ArticleCard