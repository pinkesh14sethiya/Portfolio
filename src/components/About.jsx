import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'> About </h1>
        </div>
        <h5 className='text-xl mt-20 font-signature font-extrabold'>
            Let me introduce myself
        </h5>

        <br />
        <p className='text-xl'> 
            Myself Pinkesh Sethiya, I have completed my graduation from Rajiv gandhi government pg college mandsaur 
            Madhya Pradesh and currently persuing Masters's of computer application from Motilal Nehru National Institute Of Technology 
            Allahabad Prayagraj Uttar Pradesh.
        </p>
      </div>
    </div>
  )
}

export default About
