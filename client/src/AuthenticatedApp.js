import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
import {Routes, Route, useParams, useNavigate} from 'react-router-dom'
import TripDetails from './components/TripDetails';
import AddTrip from './components/AddTrip';
import Trips from './components/Trips';
import ViewAlbum from './components/ViewAlbum';
import AddPhoto from './components/AddPhoto';
import Albums from './components/Albums';
import AddAlbum from './components/AddAlbum';
// import Itenerary from './components/Itenerary'
// import Album from './components/Album'
// import Guidr from './components/Guidr'
// import Messages from './components/Messages'
// import Profile from './components/Profile'
// import TripDetails from './components/TripDetails';
// import EditItenerary from './components/EditItenerary';

const AuthenticatedApp = ({ currentUser, setCurrentUser }) => {
    const [loading, setLoading] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])
    const [photos, setPhotos] = useState([])
    const [album, setAlbum] = useState([])
    const navigate = useNavigate()


    const handleLogout = () => {
        fetch(`/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
            }
          })
    }

    useEffect(() => {
      fetch('/trips')
      .then(res => res.json())
      .then(setData)
    }, [])

    useEffect(() => {
      fetch('/photos')
      .then(res => res.json())
      .then(setPhotos)
    }, [])

    useEffect(() => {
      fetch('/albums')
      .then(res => res.json())
      .then(setAlbum)
    }, [])


    function handleAdd(newTrip) {
      const updatedTrip = [...data, newTrip]
      setData(updatedTrip)
    }

    function addPhoto(newPhoto) {
      const updatedAlbum = [...album, newPhoto]
      setAlbum(updatedAlbum)
    }

    function addAlbum(newAlbum) {
      const updatedAlbums = [...album, newAlbum]
      setAlbum(updatedAlbums)
    }

    function deleteTrip(id) {
      const tripCard = data.filter((trip) => trip.id !== id)
      setData(tripCard)
    }

    function deletePhoto(id) {
      const photoCard = photos.filter((photo) => photo.id !== id)
      setPhotos(photoCard)
    }


    function openModal() {
      setIsOpen(true)
    }
  
    function afterOpenModal() {
  
    }
  
    function closeModal() {
      setIsOpen(false);
      navigate('/', {replace: true})
    }
  
    let subtitle;


  return (
      <div className='flex flex-row justify-between bg-gray-900 h-screen overflow-hidden'>
          <Navbar handleLogout={handleLogout} />
          <div className='ml-30 pt-10 w-full'>
              <Routes>
                  <Route exact path='/albums/:id' element={<ViewAlbum currentUser={currentUser} addPhoto={addPhoto} deletePhoto={deletePhoto} openModal={openModal} afterOpenModal={afterOpenModal} modalIsOpen={modalIsOpen}/>} />
                  <Route exact path='/addalbum' element={<AddAlbum currentUser={currentUser} addAlbum={addAlbum} />} />
                  <Route exact path='/albums' element={<Albums album={album}/>} />
                  <Route exact path='/addtrip' element={<AddTrip handleAdd={handleAdd} currentUser={currentUser} />} />
                  <Route exact path='/trips/:id' element={<TripDetails openModal={openModal} closeModal={closeModal} afterOpenModal={afterOpenModal} modalIsOpen={modalIsOpen} deleteTrip={deleteTrip} />} />
                  <Route exact path='/trips' element={<Trips data={data}/>} />
                  <Route exact path='/' element={<Dashboard currentUser={currentUser} openModal={openModal} />} />
              </Routes>
          </div>
      </div>
  )
}

export default AuthenticatedApp
