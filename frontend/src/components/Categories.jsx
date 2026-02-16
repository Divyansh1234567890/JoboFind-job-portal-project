import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { categories } from '../assets/asset';
const Categories = () => {
  const {categoriesData} = useContext(AppContext);
  const colors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-red-100 text-red-700",
  "bg-orange-100 text-orange-700",
  "bg-indigo-100 text-indigo-700",
  "bg-gray-100 text-gray-700",
  "bg-pink-100 text-pink-700",
  "bg-teal-100 text-teal-700",
  "bg-rose-100 text-rose-700"
]
  return (
    <div className='py-16 px-16'>
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">Most Popular Categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 items-center justify-center'>
        {
         categoriesData.map((item,index)=>{
          const colorClass = colors[index%colors.length];
          return(
          <div key={index} className={`w-[250px] h-[125px] flex justify-center items-center rounded-2xl shadow ${colorClass} flex-col`}>
            <img src={`http://localhost:4000/uploads/${item.logo}`} alt="" className='h-20'/>
            <div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
            </div>
          </div>
         )
         })
        }
      </div>
    </div>
  )
}

export default Categories
