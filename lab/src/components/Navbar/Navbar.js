import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to="/city/:">City</Link>
        </nav>
        </>     

    )
    
}
export default Navbar;