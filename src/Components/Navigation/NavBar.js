import react, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import '../../Assets/CSS/NavBar.css';
import DensitySmallSharpIcon from '@mui/icons-material/DensitySmallSharp';






const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickOutSide = () => {setIsOpen(false)}
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const navLink  = [
    {
     title: 'About',
     path: '/About'
    },
    {
    title: 'Contact',
    path: '/Contact'
    },
    {
    title: 'Donate',
    path: '/Donate'
    },
    {
    title: <span className='login'>{!isOpen ? <Avatar /> : "Login" }</span> ,
    path: './Login'
    },
]
    return(
        <nav className='navigation'>
            <span>St. Augustine Chaplaincy IMT</span>
            <div className='navLinks'>
                <ul>
                    {
                        navLink.map((nav, index) => {
                            return(
                                <>
                                <li key={index}>
                                   <Link to={nav.path}>{nav.title}</Link> 
                                </li>
                                
                                </>
                            )
                        })
                    }
                    
                </ul> 
            </div>
             <button style={{outline: 'none', border: 'none', background:'var(--nfcs-bg)'}} 
             onClick={toggleMenu} className={`barIcon ${isOpen ? 'rotate': ""}`}>
                    <DensitySmallSharpIcon />
             </button>
                {
                    isOpen && (
                      <div className='dropdown'>
                            <ul className='ulContent' >
                        {
                            navLink.map((nav, index) => {
                                return(
                                <>
                                    <li  key={index}>
                                        <Link to={nav.path}>{nav.title}</Link> 
                                    </li>
                                </>
                            )
                            }) 
                        }
                            </ul>
                        </div> 
                    )
                }
        </nav>
    )
}

export default NavBar;