import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import img0 from '../assets/articles/img0.png'
import img1 from '../assets/articles/img1.png';
import img2 from '../assets/articles/img2.png';
import { Link } from 'react-router-dom';
const Article = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000').then((res) => setData(res.data)).catch((err) => console.log(err,"it has an error"));
    console.log(data);
  })
  return (
    <div>
      <Header />
      <div className='bg-sky-100 grid grid-cols-5 py-12 px-8'>
        <div className='col-span-2'>
          <p className='font-semibold text-2xl'>Trusted mental health information</p>
          <p className='text-sky-700 font-semibold text-2xl'>Make your life a little more happiful</p>
        </div>
        <div className='border-r-4 border-white pl-4 pr-4'>
          <p className='font-bold '>Articles just for you</p>
          <p className='text-justify'>Discover actionable mental health and wellbeing advice from our experts</p>
        </div>
        <div className='border-r-4 border-white pl-4 pr-4'>
          <p className='font-bold'>Topics</p>
          <p className='text-justify'>From ADHD to anxiety, depression, spoon theory, relationships and beyond</p>
        </div>
        <div className='pl-4'>
          <p className='font-bold'>Verified</p>
          <p className='text-justify'>Content checked and approved by Happiful’s in-house editorial team</p>
        </div>
      </div>



      <div className='grid grid-cols-5 p-8'>
       
        <div className='col-span-3 relative'>
        <Link to='https://happiful.com/5-essential-tips-for-choosing-the-right-couples-therapist-for-you'>
        <img src={img0} className='rounded-lg'/>
        <p className='absolute bg-white text-gray rounded-full left-4 top-4 px-6'>RECENT</p>
        <p className='absolute text-3xl font-bold bottom-20 text-white pl-4'>Articles writtern just for you! : Finding what works</p>
        <p className='absolute text-xl font-bold bottom-10 text-white pl-4'>How to find moments of peace when you’re depressed</p>
        </Link>
        </div>

        <div className='col-span-2 px-4'>
        <div className='relative'>
        <Link to='https://happiful.com/20-affirmations-to-soothe-sunday-night-anxiety'>
        <img src={img1} className='w-full h-1/3 rounded-xl' />
        <p className='absolute bg-white text-gray rounded-full left-4 top-4 px-6 '>RECENT</p>
        <p className='absolute text-3xl font-bold bottom-5 text-white pl-4'>20 affirmations to soothe Sunday night anxiety</p>
        </Link>
        </div>

        <div className='bg-sky-900 relative rounded-lg '>
        <img src={img2} className='h-1/4 w-1/2 mt-6 p-4 hover:p-2' />
        <p className='absolute top-4 left-1/2 text-white font-semibold'>What is behavioural activation therapy</p>
        <p className='absolute top-20 left-1/2 text-white '>Could behavioural activation help mental health?...</p>
        </div>
        </div>
      </div>


      <div className='pl-8'>
        <p className='text-2xl font-bold mb-4'>Browse article categories</p>
        <div className='flex flex-row gap-4'>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
        
        <div>
          <h1>image here</h1>
          {
            data.map((singleData)=>{
             var base64String = btoa(
                String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
              );
              return <img src={`data:image/png;base64,${base64String}`} key={singleData._id}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Article