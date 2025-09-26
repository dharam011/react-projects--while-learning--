import React, { useContext } from 'react'
import { dataContext } from './Context'
import headphones from './image/headphones.png'
import CardGrid from './CardGrid'
import Services from './Services'

const Home = () => {
  const {formdata}= useContext(dataContext)
  return (

    <div className='p-5'>
<div className="home h-screen w-full rounded-2xl  bg-gray-400 mt-2">
  <div className='flex flex-col justify-start py-20 px-30 h-full relative'>
    <h1 className='text-3xl text-black font-medium'>Beats Solo</h1>
    <h1 className='text-9xl text-black font-bold'>Wireless</h1>
    <h1 className='text-[11rem]  bg-clip-text uppercase font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-100 '>Headphones</h1>
    <img  className='absolute bottom-15 right-8 h-4/5  object-cover' src={headphones} alt="" />
     <div className=' flex justify-between'>
    <button className='bg-gradient-to-r from-red-400 to-red-700 px-8 py-2 h-fit rounded-2xl text-white font-bold '>Shop by Catagory</button>
    <div  className='w-58 flex flex-col mt-10'>
     <h1 className='font-bold'>Discription </h1>
     <p className=' text-white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odio tenetur vitae perferendis ea soluta earum consectetur suscipit distinctio asperiores.</p>

    </div>
  </div>
  </div>
 
 
</div>
<CardGrid/>
<Services/>



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
   </div>
  )
}

export default Home