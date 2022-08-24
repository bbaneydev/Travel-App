import {MdOutlineDashboard, MdList, MdOutlineInsertPhoto, MdOutlineAssistant, MdOutlineMessage} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiLogoutCircleLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const Navbar = ({handleLogout}) => {
    return (
        <div className='absolute flex flex-col bg-gray-800 w-32 h-full text-4xl text-white space-y-6 text-center pt-6'>
            <Link to='/'><ToolTip icon={<MdOutlineDashboard size={44} />} text={'Dashboard'} /></Link>
            <Link to='/trips'><ToolTip icon={<MdList size={44} />} text={'Trips'} /></Link>
            <Link to='/albums'><ToolTip icon={<MdOutlineInsertPhoto size={44} />} text={'Photo Album'} /></Link>
            {/* <Link to='/guidr'><ToolTip icon={<MdOutlineAssistant size={44} />} text={'Guidr Assistance'} /></Link>
            <Link to='/messages'><ToolTip icon={<MdOutlineMessage size={44} />} text={'Messages'} /></Link> */}
            {/* <Link to='/profile'><ToolTip icon={<CgProfile size={44} />} text={'Profile'} /></Link> */}
            <Divider />
            <Link to='/'><ToolTip icon={<RiLogoutCircleLine size={44} className='logout' onClick={handleLogout} />} text={'Logout'} /></Link>
        </div>
    )
}

const ToolTip = ({ icon, text='tooltip' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />;

export default Navbar