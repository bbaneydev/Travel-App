import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signup from '../images/signup.jpg'

const Signup = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(res => {
            if(res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    navigate('/', { replace: true})
                })
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                })
            }
        })
    }


    return (
        <div className='flex bg-gray-900'>
            <div className='mt-40 ml-64 w-1/2 bg-gray-900 text-gray-100'>
                <h1 className="text-3xl font-mono pb-4">Create an account for free</h1>
                <h3 className='text-xl font-mono pb-10'>No payment needed.</h3>
                <form className='flex flex-col w-2/3 pt-5 font-mono text-gray-100' onSubmit={handleSubmit}>
                    <label className='pb-2 text-2xl font-mono'>Username<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-12 border-2 border-black bg-gray-900 rounded-md pl-2" placeholder='Username' type="text" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                    <label className='pb-2 text-2xl font-mono'>Password<span className='text-red-800'>*</span></label>
                    <input className="mb-6 h-12 border-2 border-black bg-gray-900 rounded-md pl-2" placeholder='******' type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    <label className='pb-2 text-2xl font-mono'>Repeat Password<span className='text-red-800'>*</span></label>
                    <input className='mb-6 h-12 border-2 border-black bg-gray-900 rounded-md pl-2' placeholder='******' type="password" />
                    <button type='submit' className="mt-6 border-black border-2 shadow-lg rounded-md text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-white hover:text-black h-12">
                        Sign Up
                    </button>
                </form>
            </div>
            <div className='w-1/2 h-screen'>
                <img src={signup} alt='mountain with a river valley' className='h-full w-full' />
            </div>
        </div>
    )
}

export default Signup