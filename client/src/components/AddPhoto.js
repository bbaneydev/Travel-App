import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Modal from 'react-modal'

const customStyles = {
    content: {
        width: '50%',
        marginLeft: '25%',
        height: '860px',
        textAlign: 'center',
        paddingTop: '2%',
        backgroundColor: '#ffffff',
        border: '1px solid black'
    },
};

Modal.setAppElement('#root')

export default function AddPhoto({ currentUser, setIsOpen, openModal, modalIsOpen }) {
    const [albums, setAlbums] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/albums/${id}`)
        .then(res => res.json())
        .then(setAlbums)
    }, [])

    function afterOpenModal() {
  
    }
  
    function closeModal() {
      setIsOpen(false);
      navigate('/', {replace: true})
    }


    const user_id = currentUser.id

    return (
        <div className='text-center mt-10'>
            <button onClick={openModal} className='w-1/3 mt-8 ml-[33.2%] border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-green-900 text-white hover:border-green-900 hover:bg-white hover:text-green-900 bottom-20 inset-x-8 h-12'>Add Photo</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className='bg-green-900 rounded-md mt-8 pt-6'
            >
                <h1 className="text-3xl font-chonburi pb-2">New Photo</h1>
                <hr />
                <form className='flex flex-col w-1/4 m-auto pt-6'>
                    <label className='pb-2 text-2xl font-mono'>Where are you going?<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-8 border-2 border-black rounded-md pl-2" placeholder='Dublin, Ireland' type="text" required/>
                    <button type="submit">Add Photo</button>
                </form>
                <Link to={`/`}>
                    <button className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-red-900 text-white hover:border-red-900 hover:bg-white hover:text-red-900 mt-2 inset-x-8 h-12'>Close</button>
                </Link>
            </Modal>
        </div>
    )
}
