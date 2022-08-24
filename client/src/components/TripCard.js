import { Link } from 'react-router-dom'

const TripCard = ({ start, end, text, location, id, openModal }) => {


    return (
        <div className='overflow-y-hidden rounded-2xl h-[360px] mr-12 w-[500px] bg-gray-700 drop-shadow-xl inline-block'>
            <h3 className='font-mono text-xl text-gray-100 pt-2 pl-4 pb-1'>{location}</h3>
            <span className='font-mono text-lg text-gray-100 pl-4'>Your trip dates are <span className='italic text-teal-300 font-bold'>{start}</span> to <span className='italic text-teal-300 font-bold'>{end}</span></span>
            <hr className='mt-2'/>
            <p className='font-mono text-xl text-gray-100 pl-4 pt-2'>Itenerary: </p>
            <p className='text-lg text-gray-100 pl-10 pt-2 overflow-hidden whitespace-pre h-[230px]'>{text}</p>
            <Link to={`/trips/${id}`}>
                <button className='float-right mr-6 text-xl mt-[-50px] h-12 w-1/3 border-black border-2 bg-teal-400 rounded-lg hover:scale-105 ease-in-out duration-300 shadow-xl'>View All</button>
            </Link>
        </div>
    )
}

export default TripCard
