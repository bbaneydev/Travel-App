import React from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

const UnauthenticatedApp = ({ setCurrentUser }) => {
    // let navigate = useNavigate()
    return (
        <Routes>
            <Route exact path='/' element={<Login setCurrentUser={setCurrentUser} />} />
            <Route exact path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
        </Routes>
    )
}

export default UnauthenticatedApp
