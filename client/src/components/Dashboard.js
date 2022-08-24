import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import TripCard from './TripCard'
import AlbumCard from './AlbumCard'


const Dashboard = ({currentUser, openModal }) => {
    const [trips, setTrips] = useState([])
    const [albums, setAlbums] = useState([])
    

    useEffect(() => {
        fetch('/trips')
        .then(res => res.json())
        .then(setTrips)
    }, [])

    useEffect(() => {
        fetch('/albums')
        .then(res => res.json())
        .then(setAlbums)
    }, [])

    const displayTrips = trips.map((trip) => {
        return <TripCard key={trip.id}
            location={trip.location}
            start={trip.start_date}
            end={trip.end_date}
            text={trip.text}
            id={trip.id}
            openModal={openModal}
        />
    })

    const displayAlbums = albums.map((album) => {
        return <AlbumCard key={album.id}
            location={album.location}
            date={album.date}
            photo={album.photo}
            id={album.id}
        />
    })

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 600
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 600
    }

    const slideLeft2 = () => {
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 600
    }

    const slideRight2 = () => {
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 600
    }

    if(!currentUser) {
        return <ClipLoader className='mt-96 ml-[950px]'/>
    }

    return (
        <div className='w-full pl-48'>
            <h1 className='text-3xl text-gray-100 font-mono'>Welcome back, {currentUser.username}</h1>
            <div className='flex flex-row h-80 ml-20 mt-5 rounded-2xl bg-gray-800 shadow-xl'>
                <h3 className='text-3xl pt-4 pl-6 text-gray-100 font-mono pr-4'>Upcoming Trips</h3>
                <Link to='/addtrip'>
                    <ToolTip icon={<IoIosAddCircleOutline size={44} />} text={'Add Trip'} />
                </Link>
            </div>
            <div className='flex flex-row w-full mt-[-15%] relative items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={55}/>
                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {displayTrips}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={55} />
            </div>
            <div className='flex flex-row mt-5 w-[95%]'>
                <h3 className='text-3xl pt-4 pl-6 text-gray-100 font-mono pr-4'>Photo Albums</h3>
                    <Link to='/addalbum'>
                        <ToolTip2 icon={<IoIosAddCircleOutline size={44} />} text={'Add Album'} />
                    </Link>
            </div>
            <div className='flex flex-row ml-5 relative items-center h-72 rounded-2xl bg-gray-800 shadow-xl pt-2'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft2} size={55}/>
                <div id='slider2' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {displayAlbums}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight2} size={55} />
            </div>
        </div>
    )
}

export default Dashboard

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

const ToolTip2 = ({ icon, text='tooltip' }) => (
    <div className='page-icon group'>
        {icon}
        <span className='page-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)


// 