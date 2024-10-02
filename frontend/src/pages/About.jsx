import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt repellat eos reiciendis pariatur. Dolor architecto temporibus quisquam molestiae officiis recusandae, praesentium autem, alias odio beatae quia inventore atque distinctio ut corporis suscipit mollitia blanditiis aut amet. Velit, corrupti modi?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis rerum voluptates assumenda quasi at cupiditate, consequatur explicabo dicta, omnis ad illo harum animi asperiores dolor quisquam error quis nostrum, praesentium eligendi ducimus enim atque facilis libero? Quas, perspiciatis quod.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam deleniti, totam commodi quae rerum explicabo maxime molestias eveniet error, amet sapiente provident veniam asperiores repudiandae dignissimos porro. Laudantium provident officiis, magni sapiente deserunt corporis veritatis a enim quaerat cupiditate.</p>
        </div>
      </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency :</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ullam! Eaque fugiat doloremque a numquam. Vero quo excepturi repudiandae aperiam?</p>
      </div>
      
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience :</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ullam! Eaque fugiat doloremque a numquam. Vero quo excepturi repudiandae aperiam?</p>
      </div>
      
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization :</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ullam! Eaque fugiat doloremque a numquam. Vero quo excepturi repudiandae aperiam?</p>
      </div>
    
    </div>

    </div>
  )
}

export default About
