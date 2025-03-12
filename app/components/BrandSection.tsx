import React from 'react'

const BrandSection = () => {
  return (
    <div className='flex flex-row justify-around h-[60px] md:flex md:flex-row md:justify-around font-bold md:gap-5 md:h-[80px] bg-black text-white items-center mt-20'>
      <h1 className='font-sans  md:text-xl lg:text-2xl'>VERSACE</h1>
    <h1 className='font-["Didot"] md:text-xl lg:text-2xl'>ZARA</h1>
      <h1 className='font-[Granjon Roman] md:text-xl lg:text-2xl'>GUCCI</h1>
      <h1 className='font-[Engry] md:text-xl lg:text-2xl'>PRADA</h1>
      <h1 className='font-[Avant Garde] md:text-xl lg:text-2xl'>Calvin Klein</h1>
    </div>
  )
}

export default BrandSection
