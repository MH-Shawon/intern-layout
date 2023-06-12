import { Link } from "react-router-dom";
import appointment  from '../../../assets/images/appointment.png'

const Navbar = () =>
{
    const navbarItems = <>

        <li className=" text-xl"><Link to='/'>Home</Link></li>
        <li className="text-xl "><Link to='/about'>About</Link></li>
        <li className="text-xl "><Link to='/portfolio'>Portfolio</Link></li>
        <li className="text-xl"><Link to='/contact'>Contact</Link></li>
        <li className="text-xl"><Link to='/buyrockstar'>Buy Rockstar</Link></li>
    </>
    return (
        <div style={{
            background:`url(${appointment})`
          }} className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown text-black npm run dev ">
                    <label tabIndex="0" className="btn btn-ghost lg:invisible  ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <Link className="text-4xl font-semibold" to='/'>Doctors Portal</Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;