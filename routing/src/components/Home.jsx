import React, { useContext } from 'react'
import { dataContext } from './Context'

const Home = () => {
  const {formdata}= useContext(dataContext)
  return (
   <div className='flex flex-wrap justify-center gap-5 p-10 '>
    {
      formdata.map((item,index) => (
        <div className='card flex bg-orange-500 rounded-md text-white p-2 flex-col justify-center items-center w-52 h-52' key={index}>
          <img className=' object-cover w-24 h-24 rounded-full' src={item.image} alt={item.name}/>
          <h1 className='text-xl capitalize  font-bold'>{item.name}</h1>
          <p className='text-sm '>{item.email}</p>
        </div>
      ))
    }
   </div>
  )
}

export default Home