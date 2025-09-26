import React from 'react'
import truck from "./image/truck-line.png" 
import verified from "./image/verified-badge-line.png"
import support from "./image/customer-service-line.png"
import money from "./image/wallet-3-line.png"
const Services = () => {
  return (
    <div className='flex justify-center gap-16 bg-gray-100 rounded-2xl p-4 mt-3'>
        <div className='flex gap-5'>
        <img className='object-cover w-12' src={truck} alt="" />
        <div>
            <h1 className='font-bold'>Free Shipping</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        </div>
        <div className='flex gap-5'>
        <img className='object-cover w-12' src={verified} alt="" />
        <div>
            <h1 className='font-bold'>Money Gaurantee</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        </div >
        <div className='flex gap-5'>
        <img className='object-cover w-12' src={support} alt="" />
        <div>
            <h1 className='font-bold'>Online support 24/7</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        </div>
        <div className='flex gap-5'>
        <img className='object-cover w-12' src={money} alt="" />
        <div>
            <h1 className='font-bold'>Secure payment</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        </div>
       
    </div>
  )
}

export default Services