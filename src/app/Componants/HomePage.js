import React from 'react'
import Nav from './Nav'
function HomePage() {
  return (
    <>
    <Nav/>
    < div className='flex h-screen pt-80 text-9xl font-semibold  flex-col'>
          < h2 className='pl-8'>Thorat Skill</h2>
          <h2 className='pl-8'>Academy</h2>
          <button className='text-xl bg-zinc-900 h-16 transition-all	delay-75	 ease	duration-75	 w-40 ml-[28vw] hover:bg-zinc-300 hover:text-zinc-900 hover:border hover:border-zinc-900	 rounded-full text-zinc-300'>BOOK NOW</button>
    </div>
    
    </>
  )
}

export default HomePage