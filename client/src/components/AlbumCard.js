import { Link } from "react-router-dom"


const AlbumCard = ({ location, date, photo, id }) => {
    return (
        <div className="mr-12 w-[400px] inline-block mt-6">
            <Link to={`/albums/${id}`}>
                <img src={photo} alt={location} className='w-[90%] h-[220px] rounded-xl inset-0 z-0 bg-cover bg-center shadow-xl hover:shadow-2xl' />
                <p className="text-white font-mono pt-1 pl-2">{location}</p>
            </Link>
        </div>
    )
}

export default AlbumCard