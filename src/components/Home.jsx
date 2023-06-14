import React from 'react'
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
       <div className='max-w-scree-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
           <div className='flex flex-col justify-center h-full'>
              <h2 className='text-4xl sm:text-7xl font-bold text-white py-4 '>
                I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                A dedicated individual with decent
academic background, passionate to know
about the new technological innovations
with ability to work independently or in a
collective. Adaptive to change, possesses
eagerness towards learning and contributing
to the organization. A track record for
leadership, good communication, and strong
work ethics.   
                </p>
                <div>
                    <botton  className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                            className='ml-1'/>
                        </span>
                    </botton>
                </div>
           </div>
           <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto h-96 '  />
       </div>
    </div>
  )
}

export default Home
