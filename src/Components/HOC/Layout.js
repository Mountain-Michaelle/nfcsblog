import react, { useEffect } from 'react'
import NavBar from '../Navigation/NavBar'
import { connect } from 'react-redux'
import {checkAuthenticated, load_user} from '../Actions/auth';


const Layout = (props) => {

    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    },[])
    
    return(
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default connect(null, {checkAuthenticated, load_user}) (Layout);