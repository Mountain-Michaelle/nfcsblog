import react, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import '../../Assets/CSS/NavBar.css';
import DensitySmallSharpIcon from '@mui/icons-material/DensitySmallSharp';
import { connect } from 'react-redux';
import {logout} from '../Actions/auth';




const NavBar = ({logout, isAuthenticated}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickOutSide = () => {setIsOpen(false)}
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const navigate = useNavigate()

    const handleLogout = () => {
        return logout();
    }
    const handleLogin = () => {
        navigate('/Login')
    }
    
    
    const navLink  = [
    {
     title: 'About',
     path: './About'
    },
    {
    title: 'Contact',
    path: './Contact'
    },
    {
    title: 'Donate',
    path: './Donate'
    },
    {
        title:
         <span>
            {
            isAuthenticated ? <button className="logout_btn" onClick={handleLogout}>logout</button> :
                <button className='logout_btn' style={{color:'purple'}}>Login</button>
            }
        </span>,

      path: "./Login"
    },
    
]

    const handleClick = (path) => {
        navigate(`/${path}`)
        setIsOpen(false)
    }
    return(
        <nav className='navigation'>
          <Link to="./"><h2>St. Augustine Chaplaincy IMT</h2></Link>  
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
                                        <a onClick={ () => handleClick(nav.path)}>{nav.title}</a> 
                                    </li>
                                </>
                            )
                            }) 
                        }
                            </ul>
                            <div className='off' onClick={handleClickOutSide} ></div>
                        </div> 
                    )
                }
                
        </nav>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout}) (NavBar);