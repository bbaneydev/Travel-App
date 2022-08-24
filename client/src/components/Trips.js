import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Trips = ({ data }) => {
    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 600
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 600
    }

    return (
        <div className='w-full pl-48'>
            <div className='flex flex-row h-80 ml-20 mt-5 rounded-2xl bg-gray-800 shadow-xl'>
                <h3 className='text-3xl pt-4 pl-6 text-gray-100 font-mono pr-4'>Upcoming Trips</h3>
                <Link to='/addtrip'>
                    <ToolTip icon={<IoIosAddCircleOutline size={44} />} text={'Add Trip'} />
                </Link>
            </div>
            <div className='flex flex-row w-full relative items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white mt-[-14%]' onClick={slideLeft} size={55}/>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-[-14%]'>
                {data.map((trip) => (
                    <div key={trip.id} className='h-[700px] overflow-y-hidden w-[500px] bg-gray-700 mr-12 rounded-2xl pt-4 drop-shadow-lg inline-block'>
                        <h3 className='text-xl text-center pt-1 font-mono font-bold italic text-gray-100'>{trip.location}</h3>
                        <p className='text-lg text-center pt-1 pb-1 font-mono text-gray-100'>Your trip is from <span className='text-teal-300 italic font-bold'>{trip.start_date}</span> to <span className='text-teal-300 italic font-bold'>{trip.end_date}</span></p>
                        <hr />
                        <p className='text-lg pl-8 pt-1 font-mono text-gray-100 whitespace-pre-line h-[500px] overflow-hidden'>{trip.text}</p>
                        <Link to={`/trips/${trip.id}`}>
                            <button className="relative border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-gray-100 hover:text-black mt-[8%] inset-x-24 h-12 w-[300px]">See Details</button>
                        </Link>
                    </div>
                ))}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-white mt-[-14%]' onClick={slideRight} size={55} />
            </div>
        </div>
    )
}

export default Trips

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)
