import React from 'react'
import user from '../assets/user.png';
const TherapistCard = () => {
  return (
    <div className='shadow-lg shadow-gray-500/50'>
        <div className='grid grid-cols-4 border-2 border-gray rounded-lg p-8 bg-white '>
            <div className='flex border-r-2 justify-center bg-gray-50'>
                <img src={user} className='rounded-full w-32 h-32 border-4 border-yellow-300 rounded-full' />
            </div>
            <div className='col-span-3 flex flex-col pl-4 '>
                <div className='flex flex-row justify-between '>
                    <p className='text-2xl font-bold'> Zan Life Coaching</p>
                    <p className='border-2 border-gray-100 px-2 py-1'>tags</p>
                </div>
                <div className='text-sm'>
                Career coaching and business coaching || bio
                </div>
                <div className='pt-3'>
                    <p>
                    Hi I'm Suzanne, I have 14 Years experience in 1 to 1 coaching and running group workshops. I am a qualified NLP Practitioner & Breakthrough Coach, Time Line Therapist, Hypnotherapist and in Level 2 Counselling.
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p className='bg-yellow-400 rounded-lg px-4 py-2'> Schedule a meet </p>
                        <p className='text-md font-bold'>747472910</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TherapistCard