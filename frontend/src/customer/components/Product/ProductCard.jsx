import React from 'react'
import "./ProductCard.css"

function ProductCard({item}) {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-top-left' src={item.image} alt="" />
      </div>
      <div className='teaxtPart bg-white p-3 '>
        <div>
          <p className='font-bold opacity-60'>{item.brand}</p>
          <p>{item.description}</p>
        </div>
        <div  className='flex items-center space-x-2'>
          <p className='font-semibold'>₹{item.discountPrice}</p>
          {/* Real Prize */}
          <p className='line-through opacity-50'>₹{item.price}</p>
          {/* //Discount */}
          <p className='text-green-600 font-semibold'>{item.discountPercent}% off</p>


        </div>

      </div>

    </div>
  )
}

export default ProductCard