import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_CPkMzITD8920gXaX0fDrmOjj0SZz7RVaXuumOBFHg&s=10" alt="image" />

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>SG LEMAN</h3>
            <p className='mt-2 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>

    </div>
  )
}

export default HomeSectionCard