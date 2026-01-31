import React from 'react'
import { asset } from '../assets/asset'
import { howWorks } from '../assets/asset'
const HowJoboFindWorks = () => {
  return (
    <div className='py-16 px-16 bg-gray-100'>
      <h3 className='text-2xl md:text-5xl font-semibold text-gray-800 text-center'>How JoboFind Works</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 items-center justify-center'>
      {
        howWorks.map((item,index)=>{
          return(
          <div key={index} className='flex flex-col justify-center items-center'>
            <img src={item.icon} alt="" className='h-20'/>
            <div className='flex flex-col justify-center items-center text-gray-800 mt-5'>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            </div>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default HowJoboFindWorks
