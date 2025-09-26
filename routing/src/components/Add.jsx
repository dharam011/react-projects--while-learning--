import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { dataContext } from './Context'
import { useNavigate } from "react-router-dom";


const Add = () => {
    const { register, handleSubmit ,reset } = useForm()
    const {addData}= useContext(dataContext)
    const  navigate = useNavigate()
    
const submitHandeler = (data) => {
    addData(data)
    reset()
    console.log(data)
    navigate("/")
}

  return (
    <div className='flex justify-center flex-col items-center mt-5 '>
        <form onSubmit={handleSubmit(submitHandeler)} action="" className='flex flex-col gap-2 '>
            <label >Image URL</label>
            <input {...register("image")} type="url" name="image" id="link" placeholder='enter image url' required className='outline-none border border-gray-300 p-2 rounded-lg' />
 <label >Name</label>
            <input {...register("name")} type="text" name="name" id="name" placeholder='enter name' className='outline-none border border-gray-300 p-2 rounded-lg' />
           <label >email</label> 
            <input {...register("email")} type="text" name="email" id="email" placeholder='enter email' className='outline-none border border-gray-300 p-2 rounded-lg' />
           
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>Add</button>
        </form>
    </div>
  )
}

export default Add