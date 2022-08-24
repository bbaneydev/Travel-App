import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"
import { AiOutlineDelete } from 'react-icons/ai'

const PhotoCard = ({ title, photo, who, date, id, deletePhoto }) => {
    const [photos, setPhotos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/photos/${id}`)
        .then(res => res.json())
        .then(setPhotos)
    }, [])

    function handleDelete() {
        fetch(`/photos/${id}`,{
            method: 'DELETE'
        })
        .then(deletePhoto(photos))
        .then(navigate(0, {replace: true}))
    }

    if(!photos) {
        return <ClipLoader className='mt-96 ml-[950px]'/>
    }


    return (
        <div className='flex flex-col'>
            <div className='mt-4 shadow-xl hover:shadow-2xl mr-12 h-80 w-[500px] relative hover:scale-105 ease-in-out duration-300 mb-4'>
                <img src={photo} alt={title} className='w-full h-80 rounded-2xl absolute bg-cover bg-center hover:opacity-10' />
                <div className='pt-20 text-center bg-gray-800 h-full rounded-2xl'>
                    <p className='font-mono font-bold mb-2 text-gray-100'>Where was this photo taken: <span className='italic font-normal text-gray-300'>{title}</span></p>
                    <p className='font-mono font-bold mb-2 text-gray-100'>Who took the photo: <span className='italic font-normal text-gray-300'>{who}</span></p>
                    <p className='font-mono font-bold mb-2 text-gray-100'>What day was it taken: <span className='italic font-normal text-gray-300'>{date}</span></p>
                </div>
            </div>
            <button className='float-left w-[10%] mt-[-2%]' onClick={handleDelete}>
                <ToolTip icon={<AiOutlineDelete size={36} />} text={'Delete Photo'}/>
            </button>
            <span className='ml-14 text-red-200 mt-[-7%] text-sm'>Delete</span>
            {/* <button className='float-left border-black border-2 bg-teal-300 w-[40%] h-8 text-lg font-mono text-black rounded-lg hover:scale-105 ease-in-out duration-300 shadow-lg' onClick={handleDelete}>Delete</button> */}
        </div>
    )
}

export default PhotoCard

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='page-icon'>
        {icon}
        <span className='page-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)



{/* <div className='mt-4 shadow-xl hover:shadow-2xl mr-12 h-80 w-[500px] relative hover:scale-105 ease-in-out duration-300 mb-4' key={item.id}>
//                             {/* <button onClick={handleDelete(`${item.id}`)}>Delete</button> */}
//                             <img src={item.photo} alt={item.title} className='w-full h-80 rounded-t-md absolute bg-cover bg-center hover:opacity-10' />
//                             <div className='pt-20 text-center'>
//                                 <p className='font-mono mb-2'>Where was this photo taken: <span className='italic'>{item.title}</span></p>
//                                 <p className='font-mono mb-2'>Who took it: <span className='italic'>{item.who}</span></p>
//                                 <p className='font-mono mb-2'>What day was it taken: <span className='italic'>{item.date}</span></p>
//                             </div>
//                         </div> */}