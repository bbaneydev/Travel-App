import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Album = ({ album }) => {
console.log(album);
    return (
        <div className='w-full pl-48'>
            <div className='flex flex-row'>
                <h3 className='pt-10 text-2xl font-mono text-gray-100 font-bold ml-1 mr-2'>Photo Albums</h3>
                <Link to='/addalbum' className='ml-2 mt-6'>
                    <ToolTip icon={<IoIosAddCircleOutline size={44} />} text={'Add Album'} />
                </Link>
            </div>
            {album.length > 0 ? 
                <div className='flex flex-row flex-wrap'>
                    {album.map((item) => (
                        <Link to={`/albums/${item.id}`}>
                            <div className='mb-10'>
                                <div className='mt-4 shadow-xl hover:shadow-2xl mr-12 h-80 w-[500px] relative hover:scale-105 ease-in-out duration-300'>
                                    <img src={item.photo} alt={item.location} className='w-full h-80 rounded-2xl absolute bg-cover bg-center' />
                                </div>
                                <div className='flex justify-between'>
                                    <p className='font-mono text-gray-100 pt-2 pl-4'>{item.location}</p>
                                    <p className='font-mono text-gray-100 pt-2 pr-20'>{item.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>   
            :
                <div>
                    <h1 className='text-gray-100 font-mono ml-10 mt-4'>You currently have no photo albums, click the button above to start one!</h1>
                </div>
            }
        </div>
    )
}

export default Album

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='page-icon group'>
        {icon}
        <span className='page-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)
