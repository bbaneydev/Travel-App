import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import tripImage from '../images/trips.jpg'
// import EditTrip from './EditTrip'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'


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

const TripDetails = ({ openModal, closeModal, afterOpenModal, modalIsOpen, deleteTrip }) => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const [text, setText] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`/trips/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    // console.log(data);

    function handleEdit() {
        fetch(`/trips/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ text })
        })
        .then(res => res.json())
        .then(navigate('/', {replace: true}))
    }

    function handleDelete() {
        fetch(`/trips/${id}`, {
            method: 'DELETE'
        })
        .then(deleteTrip(id))
        .then(navigate('/', {replace: true}))
    }

    function handleNevermind() {
        navigate(0, {replace: true})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-full h-full">
            <div className='flex flex-row'>
                <h3 className='text-2xl font-mono text-gray-100 ml-72 mt-5 '>{data.location}</h3>
                <button className='ml-16' onClick={openModal}>
                    <ToolTip icon={<AiOutlineEdit size={40}/>} text={'Edit Trip'}/>
                </button>
                <span className='text-sm ml-2 mt-6 text-gray-300'>Edit Trip</span>
                <button className='ml-[55%]' onClick={handleDelete}>
                    <ToolTip icon={<AiOutlineDelete size={40}/>} text={'Delete Photo'}/>
                </button>
                <span className='text-sm ml-2 mt-6 text-gray-300'>Delete Trip</span> 
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className='rounded-md mt-8 pt-6'
            >
                <h1 className='text-xl font-mono text-gray-100'>Editing trip to {data.location}</h1>
                <p className='font-mono text-lg mb-2 text-gray-200'>Click inside the box to start editing</p>
                <form onSubmit={handleSubmit}>
                    <textarea defaultValue={data.text} onChange={(e) => setText(e.target.value)} className='text-gray-100 w-2/3 h-[600px] border-teal-300 border-2 rounded-md font-mono mb-4 p-4 bg-gray-800'></textarea><br/>
                    <button onClick={handleEdit} className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-teal-300 text-black hover:border-teal-300 hover:bg-gray-100 hover:text-black bottom-20 inset-x-8 h-12'>Submit Changes</button>
                </form>
                <button onClick={handleNevermind} className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-red-900 text-white hover:border-red-900 hover:bg-white hover:text-red-900 mt-2 inset-x-8 h-12'>Nevermind</button>
            </Modal>
            <div className='h-80 w-[95%] rounded-2xl bg-gray-800 shadow-xl'>
                <h1 className='text-gray-100 font-mono text-lg ml-40 pt-10 mb-10'>Arriving on <span className='italic font-bold text-teal-300'>{data.start_date}</span></h1>
                <div className='h-[600px] w-[82%] ml-72 rounded-xl shadow-xl mb-[-10%] relative bg-gray-700'>
                        <h1 className='text-2xl font-bold text-gray-100 font-mono ml-6 pt-6'>Your current itenerary:</h1>
                    <div className='w-[30%] columns-1 h-[70%] mt-10'>
                        <p className='text-xl text-gray-100 font-mono ml-10 pt-6 leading-12 whitespace-pre-line'>{data.text}</p>
                    </div>
                </div>
                <div className='h-96 w-[92%] mr-[-6%] float-right rounded-2xl bg-gray-800 shadow-xl'>
                    <h1 className='text-gray-100 float-right pt-60 pr-20 font-mono text-lg'>Leaving on <span className='italic font-bold text-teal-300'>{data.end_date}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default TripDetails

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='page-icon'>
        {icon}
        <span className='page-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)



{/* <EditTrip openModal={openModal} closeModal={closeModal} afterOpenModal={afterOpenModal} modalIsOpen={modalIsOpen} /> */}


{/* <div className=''>
                <p className='text-lg font-mono min-h-[110%] whitespace-pre pl-24 pt-4 bg-white'>{data.text}</p><br/>
            </div> */}
            {/* <button onClick={openModal} className='w-1/3 mt-8 ml-[33.2%] border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-green-900 text-white hover:border-green-900 hover:bg-white hover:text-green-900 bottom-20 inset-x-8 h-12'>Edit Trip</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className='bg-green-900 rounded-md mt-8 pt-6'
            >
                <h1 className='text-3xl font-mono text-white'>Edit Trip</h1>
                <p className='font-mono text-xl mb-2 text-white'>Click inside the box to start editing!</p>
                <form onSubmit={handleSubmit}>
                    <textarea defaultValue={data.text} onChange={(e) => setText(e.target.value)} className='w-2/3 h-[600px] border-black border-2 rounded-md font-mono mb-4 p-4'></textarea><br/>
                    <button onClick={handleEdit} className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-green-800 text-white hover:border-green-900 hover:bg-white hover:text-green-900 bottom-20 inset-x-8 h-12'>Submit Edit</button>
                </form>
                <Link to={`/`}>
                    <button className='w-1/3 border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-red-900 text-white hover:border-red-900 hover:bg-white hover:text-red-900 mt-2 inset-x-8 h-12'>Close</button>
                </Link>
            </Modal>
            {/* <button>
                <ToolTip icon={<AiOutlineDelete />} text={'Delete Photo'}/>
            </button> */}
            {/* <button onClick={handleDelete} className='w-1/3 mt-4 ml-[33.2%] border-black border-2 shadow-lg rounded-md font-mono text-2xl font-bold bg-red-900 text-white hover:border-red-900 hover:bg-white hover:text-red-900 inset-x-8 h-12'>Delete Trip</button> */}


