import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import addtrip from '../images/addtrip.jpg'

// location, start_date, end_date, text

const AddTrip = ({ handleAdd, currentUser }) => {
    const [location, setLocation] = useState('')
    const [start_date, setStart] = useState('')
    const [end_date, setEnd] = useState('')
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const user_id = currentUser.id

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                start_date,
                end_date,
                text,
                user_id
            })
        })
        .then(res => res.json())
        .then((newTrip) => {
            handleAdd(newTrip)
            navigate('/', {replace: true})
            navigate(0)
        })
    }

    

    return (
        <div>
            <div className='pt-6 w-1/2 m-auto'>
            <h1 className="text-3xl text-center font-mono pb-2 text-gray-100">Add New Trip</h1>
            <form className='flex m-auto flex-col w-[80%] pt-4' onSubmit={handleSubmit}>
                <label className='pb-2 text-2xl font-mono text-gray-100'>Where are you going?<span className='text-red-800'>*</span></label>
                <input  className="mb-6 h-12 border-2 border-teal-300 rounded-md pl-2 bg-gray-900 text-gray-100" placeholder='Dublin, Ireland' type="text" value={location} required onChange={(e) => setLocation(e.target.value)}/>
                <label className='pb-2 text-2xl font-mono text-gray-100'>When does your trip start?<span className='text-red-800'>*</span></label>
                <input  className="mb-6 h-12 border-2 border-teal-300 rounded-md pl-2 bg-gray-900 text-gray-100" placeholder='mm-dd-yyyy' type="text" value={start_date} required onChange={(e) => setStart(e.target.value)}/>
                <label className='pb-2 text-2xl font-mono text-gray-100'>When does your trip end?<span className='text-red-800'>*</span></label>
                <input className="mb-6 h-12 border-2 border-teal-300 rounded-md pl-2 bg-gray-900 text-gray-100" placeholder='mm-dd-yyyy' type="text" value={end_date} required onChange={(e) => setEnd(e.target.value)}/>
                <label className='pb-2 text-2xl font-mono text-gray-100'>Itenerary<span className='text-red-800'>*</span></label>
                <textarea className='mb-6 border-2 overflow-y-auto border-teal-300 bg-gray-900 text-gray-100 rounded-md pl-2 h-[300px]' placeholder='Lets plan our trip...' value={text} type='textarea' required onChange={(e) => setText(e.target.value)}></textarea>
                <button type="submit" className='mt-2 border-black border-2 shadow-lg rounded-md text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-white hover:text-black h-12'>Add Trip</button>
            </form>
            </div>
        </div>
    )
}

export default AddTrip