import React from 'react'
import data from '../data.json'
import { useState } from 'react';

const Cards = ({activeFilter}) => {
    const [extensions, setExtensions] = useState(data);

    const toggleActive = (name) => {
        setExtensions(prev =>
            prev.map((item) =>
                item.name === name ? { ...item, isActive: !item.isActive } : item
            )
        )
    }

    const filteredExtensions = extensions.filter((ext) => {
        if(activeFilter === 'Active') return ext.isActive;
        if(activeFilter === 'Inactive') return !ext.isActive;
        return true;
    })

    const removeExtension = (name) => {
        setExtensions(prev => prev.filter((item) => item.name !== name))
    }
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredExtensions.map((ext, index) => (
                <div key={index} className='border border-[hsl(219,69%,87%)] shadow-md bg-white p-4 rounded-3xl max-w-3xl
                dark:bg-[hsl(226,25%,17%)] dark:border-[hsl(226,11%,37%)]'>
                    <div className='flex gap-4'>
                        <div>
                            <img src={ext.logo} alt={ext.name} width={135}/>
                        </div> 
                        <div>
                            <h2 className='text-xl font-bold dark:text-white'>{ext.name}</h2>
                            <p className='text-md text-[hsl(226,11%,37%)] leading-5.5 font-medium pt-2 dark:text-[hsl(0,0%,78%)]'>{ext.description}</p>
                        </div>                    
                    </div>
                    
                    <div className='pt-7 flex justify-between items-center md:pt-15'>
                        <button
                            type="button"
                            onClick={() => removeExtension(ext.name)}
                            aria-label={`Remove ${ext.name}`}
                            className='border border-[hsl(0,0%,78%)] bg-white px-4 py-1 rounded-3xl font-semibold text-[hsl(227,75%,14%)]
                            hover:bg-red-700 hover:text-white cursor-pointer dark:text-white dark:bg-[hsl(226,25%,17%)] dark:border-[hsl(226,11%,37%)]
                            dark:hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 dark:ring-offset-gray-950'>
                            Remove 
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleActive(ext.name)}
                            aria-label={`${ext.isActive ? 'Deactivate' : 'Activate'} ${ext.name}`}
                            className={`w-11 h-6 rounded-full transition-colors duration-300 
                            focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 dark:ring-offset-gray-950 
                            ${ext.isActive 
                                ? 'bg-red-700 hover:bg-red-400 cursor-pointer dark:bg-red-400 dark:hover:bg-red-500' 
                                : 'bg-[hsl(0,0%,78%)] cursor-pointer dark:bg-[hsl(226,11%,37%)] dark:hover:bg-[hsl(224,15%,30%)]'
                            }`}
                        >
                            <span className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300
                                ${ext.isActive ? 'translate-x-5' : 'translate-x-1'}`}>
                            </span>
                        </button>
                    </div>
                </div>
            ))}  
        </div>
    )
}

export default Cards