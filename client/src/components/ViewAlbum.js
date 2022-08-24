import React, { useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"
import PhotoCard from './PhotoCard'
// import AddPhoto from './AddPhoto'
import Modal from 'react-modal'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineDelete } from 'react-icons/ai'

const customStyles = {
    content: {
        width: '50%',
        marginLeft: '25%',
        height: '860px',
        textAlign: 'center',
        paddingTop: '2%',
        backgroundColor: 'rgb(31, 41, 55)',
        border: '1px solid black'
    },
};

Modal.setAppElement('#root')

const ViewAlbum = ({ deletePhoto, currentUser, addPhoto }) => {
    const [album, setAlbum] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [photo, setPhoto] = useState('')
    const [who, setWho] = useState('')
    const [date, setDate] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/albums/${id}`)
        .then(res => res.json())
        .then(setAlbum)
    }, [])

    const user_id = currentUser.id
    const album_id = album.id

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/photos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                photo,
                who,
                date,
                user_id,
                album_id
            })
        })
        .then(res => res.json())
        .then((newPhoto) => {
            addPhoto(newPhoto)
            navigate(0, {replace: true})
        })
    }

    const grabPhotos = album.photos

    if(!grabPhotos) {
        return <ClipLoader className='mt-96 ml-[950px]'/>
    }

    const getPhotos = grabPhotos.map((item) => {
        return (
            <PhotoCard key={item.id}
                photo={item.photo}
                title={item.title}
                who={item.who}
                date={item.date}
                id={item.id}
                deletePhoto={deletePhoto}
            />
        )
    })

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
  
    }
  
    function closeModal() {
      setIsOpen(false);
      navigate(0, {replace: true})
    }

    const ToolTip = ({ icon, text='tooltip' }) => (
        <div className='page-icon'>
            {icon}
            <span className='page-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
    

    return (
        <div className='pl-48'>
            <div className='flex'>
                <h1 className='text-2xl text-gray-100 pt-10 font-bold font-mono pr-2'>{album.location}</h1>
                <button onClick={openModal} className='mt-6 ml-2'>
                    <ToolTip icon={<IoIosAddCircleOutline size={44} />} text={'Add Photo'} />
                </button>
                <span className='ml-1 pt-12 text-gray-200 text-sm'>Add Photo</span>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className='bg-green-900 rounded-md mt-8 pt-6'
            >
                <h1 className="text-3xl font-mono pb-2 text-gray-100">New Photo</h1>
                <hr />
                <form onSubmit={handleSubmit} className='flex flex-col pl-14 pr-14 m-auto pt-6 font-mono text-gray-100 w-[70%] text-left'>
                    <label className='pb-4 text-2xl font-mono'>Where was the photo taken?<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-8 border-2 border-teal-300 bg-gray-800 rounded-md pl-2" placeholder='Gatlinburg Space Needle' value={title} type="text" required onChange={(e) => setTitle(e.target.value)}/>
                    <label className='pb-4 text-2xl font-mono'>Who took the photo?<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-8 border-2 border-teal-300 bg-gray-800 rounded-md pl-2" placeholder='Persons First Name' value={who} type="text" required onChange={(e) => setWho(e.target.value)}/>
                    <label className='pb-4 text-2xl font-mono'>What day was the photo taken?<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-8 border-2 border-teal-300 bg-gray-800 rounded-md pl-2" placeholder='MM-DD-YYYY or Month day, year' value={date} type="text" required onChange={(e) => setDate(e.target.value)}/>
                    <label className='pb-4 text-2xl font-mono'>Upload your photo!<span className='text-red-800'>*</span></label>
                    <input  className="mb-6 h-8 border-2 border-teal-300 bg-gray-800 rounded-md pl-2" placeholder='url here' value={photo} type="text" required onChange={(e) => setPhoto(e.target.value)}/>
                    <button type="submit" className='w-[57%] border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-white hover:text-black m-auto inset-x-8 h-12'>Add Photo</button>
                </form>
                <button onClick={closeModal} className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-red-900 text-white hover:border-red-900 hover:bg-white hover:text-red-900 mt-2 inset-x-8 h-12'>Close</button>
            </Modal>
            <p className='text-sm font-mono ml-8 text-gray-200 mt-2'>Hover over the photo for details!</p>
            <div className='flex flex-row flex-wrap'>
                {getPhotos}
            </div>
        </div>
    )
}

export default ViewAlbum
