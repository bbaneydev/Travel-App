import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import login from '../images/login.jpg'

const Login = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/login', {
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
        <div className='flex bg-gray-900 text-gray-100'>
            <div className='mt-40 ml-64 w-1/2'>
                <h1 className="text-3xl font-mono mb-6">Welcome back!</h1>
                <form className='flex flex-col w-2/3 pt-5 font-mono text-gray-100' onSubmit={handleSubmit}>
                    <label className='pb-2 text-2xl font-mono'>Username</label>
                    <input  className="mb-6 h-12 border-2 border-black bg-gray-900 rounded-md pl-2" placeholder='Username' type="text" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                    <label className='pb-2 text-2xl font-mono'>Password</label>
                    <input className="mb-6 h-12 border-2 border-black bg-gray-900 rounded-md pl-2" placeholder='******' type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className="mt-4 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-white hover:text-black h-12">
                        Log In
                    </button>
                </form>
                <p className='mt-5'>Not a member yet? <Link to='/signup'><span className="italic underline cursor-pointer text-teal-300">Click here</span></Link> to sign up!</p>
            </div>
            <div className='w-1/2 h-screen'>
                <img src={login} alt='lake at sunset' className='h-full w-full' />
            </div>
        </div>
    )
}

export default Login