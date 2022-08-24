import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const AddAlbum = ({ currentUser, addAlbum }) => {
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [photo, setPhoto] = useState('')
    const user_id = currentUser.id
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                date,
                photo,
                user_id
            })
        })
        .then(res => res.json())
        .then((newAlbum) => {
            console.log(newAlbum);
            addAlbum(newAlbum)
            navigate('/albums', {replace: true})
            navigate(0)
        })
    }

    return (
        <div>
            <div className='pt-6 w-1/2 m-auto'>
            <h1 className="text-3xl text-center font-mono pb-2 text-gray-100">Add New Trip</h1>
            <form className='flex m-auto flex-col w-[80%] pt-4' onSubmit={handleSubmit}>
                <label className='pb-2 text-2xl font-mono text-gray-100'>Where was this trip?<span className='text-red-800'>*</span></label>
                <input  className="mb-6 h-12 border-2 border-teal-300 rounded-md pl-2 bg-gray-900 text-gray-100" placeholder='Dublin, Ireland' type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <label className='pb-2 text-2xl font-mono text-gray-100'>When did you take this trip?<span className='text-red-800'>*</span></label>
                <input  className="mb-6 h-12 border-2 border-teal-300 rounded-md pl-2 bg-gray-900 text-gray-100" placeholder='mm-dd-yyyy' type="text" value={date} required onChange={(e) => setDate(e.target.value)}/>
                <label className='pb-2 text-2xl font-mono text-gray-100'>Upload an image from the trip to be your album cover<span className='text-red-800'>*</span></label>
                <input  className="mb-6 h-12 border-2 border-teal-300 rounded-md pt-[.8%] pl-2 bg-gray-900 text-gray-100" type="text" required value={photo} onChange={(e) => setPhoto(e.target.value)} />
                <button type="submit" className='mt-2 border-black border-2 shadow-lg rounded-md text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-white hover:text-black h-12'>Start Album</button>
            </form>
            </div>
        </div>
    )
}

export default AddAlbum