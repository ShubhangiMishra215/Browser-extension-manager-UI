import React from 'react'

const Navbar = ({activeFilter, setActiveFilter}) => {

    const filters = ['All', 'Active', 'Inactive']

  return (
    <div className='md:flex md:justify-between md:items-center md:pt-8 pb-5 dark:text-white'>
        <h1 className='text-center text-4xl font-bold pt-10 md:pt-0'>Extensions List</h1>

        <div className='flex flex-row justify-center items-center gap-5 p-5'>
        {filters.map((filter)=>(
            <button
            key={filter}
            onClick={()=>setActiveFilter(filter)}
            className={
                `border shadow-md px-5 py-2 text-xl rounded-3xl cursor-pointer transition-colors hover:
              ${activeFilter === filter
                ? 'bg-red-500 text-black border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 dark:ring-offset-gray-950 dark:bg-red-700'
                : `bg-white border-[hsl(219,69%,87%)] hover:text-[hsl(226,11%,37%)] hover:bg-[hsl(200,60%,99%)]
                   dark:bg-[hsl(226,25%,17%)] dark:border-[hsl(226,11%,37%)] 
                   dark:hover:bg-[hsl(226,11%,37%)]`
              }`
            }
            >
                {filter}
            </button>
        ))}
        
        </div>
    </div>
  )
}

export default Navbar
