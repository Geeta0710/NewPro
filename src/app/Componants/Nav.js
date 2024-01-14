import React from 'react'

function Nav() {
  return (
    <>
    <div className='flex items-center h-24 bg-zinc-900 justify-between pl-20 pr-20'>
        <div>
            <h2 className='text-4xl font-semibold bg-zinc-900 text-zinc-200'>Logo</h2>
        </div>
        <div className='flex items-center justify-center gap-5 bg-zinc-900 '>
            <h2 className='text-xl font-semibold bg-zinc-900 hover:text-zinc-400 text-zinc-200'>Home</h2>
            <h2 className='text-xl font-semibold bg-zinc-900 hover:text-zinc-400 text-zinc-200'>Sign in</h2>
            <h2 className='text-xl font-semibold bg-zinc-900 text-zinc-200 hover:text-zinc-400'>Our Course</h2>
        </div>
    </div>
    </>
  )
}

export default Nav