import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* {left section} */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dot modi laborum ducimus, accusamus doloremque assumenda distinctio amet deserunt sit sapiente delectus quasi dicta, quis cum hic enim perferendis. Commodi repellendus aspernatur dolorem, enim ipsa consequatur ipsam dolore at sapiente eius vel optio velit cumque tempora quis ex!</p>

        </div>
      
      
        {/* {center section} */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* {right section} */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-9286064945</li>
                <li>sujalbindra@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* {copyright text } */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright  2024@Prescripto-All Right Reserved</p>

      </div>
    </div>
  )
}

export default Footer
