import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-3xl text-center pt-8 border-t '>
         <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt=" " className='w-full md:max-w-[450px]'  />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Our stores feature gently-used designer and brand-name clothing, shoes, and accessories. 
          Whether you're hunting for that perfect little black dress, a statement handbag, 
          or the latest trends, you'll find it all here at prices that make your heart (and wallet) sing. 
          Plus, you can earn cash by selling us your gently loved fashions.</p>

          <p>At Clothes Mentor, we're more than just a store – we're a community of like-minded fashion lovers.
           From style tips and trend alerts to exclusive events and VIP perks, we keep our community close and our wardrobes closer.</p>
           <b className='text-gray-500'>Our Mission</b>
           <p>At Clothes Mentor, we believe fashion is more than just what you wear – it's a lifestyle, an expression of who you are,
             and a journey of self-discovery. We're here to make that journey fabulous, effortless, and oh-so-stylish.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border px-5 md:px-8 py-4 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>At Clothes Mentor, we're more than just a store – we're a community of like-minded fashion lovers.
             From style tips and trend alerts to exclusive events and VIP perks,
              we keep our community close and our wardrobes closer.</p>
        </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Shop brands and styles you love for up to 70% off. We bring you fashion at a fraction of the original price,
             because every fashionista deserves a little luxe in her life.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Every item in our store is handpicked, meticulously inspected, and all luxury 
            brands are authenticated by our style-savvy team, ensuring you get only the best.</p>
        </div>

      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About
