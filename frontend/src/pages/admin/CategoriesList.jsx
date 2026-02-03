import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const CategoriesList = () => {
  const {categoriesData} = useContext(AppContext);
  return (
    <div className='p-6 bg-white rounded shadow'>
      <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
        All Categories
      </h2>

      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-200 text-sm'>
          <thead>
            <tr className='bg-gray-100 text-left'>
              <th className='py-3 px-4 border-b'>Logo</th>
              <th className='py-3 px-4 border-b'>Category Name</th>
              <th className='py-3 px-4 border-b'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              categoriesData.map((category)=>(
                <tr key={category._id} className='hover:bg-gray-50'>
                  <td className='py-3 px-4 border-b'>
                    <img src={category.icon} alt="categoryIcon" className='w-12 h-12 rounded object-cover border'/>
                  </td>
                  <td>
                    <p className='py-3 px-4  font-medium'>{category.name}</p>
                  </td>
                  <td className='py-3 px-4'>
                    <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:scale-95 cursor-pointer'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoriesList
