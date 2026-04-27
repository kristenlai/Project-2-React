import '../App.css';
import { Link } from 'react-router';
import { useAuth, useUsername } from './authorize/AuthContext';

function header() {
    const username = useUsername();
    const {logout} = useAuth();
    return (
        <div>
          <h1>My Blog</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <Link to="/about"><p>About</p></Link>
                    </li>
                    <li>
                        <Link to="/contact"><p>Contact</p></Link>
                    </li>
                    <li>
                        <Link to="/posts"><p>Posts</p></Link>
                    </li>
                    <li>
                        {/* <Link to="/login">Login</Link> */}
                        {username ? <p onClick={logout}>Logout</p> : <Link to="/login"><p>Login</p></Link>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default header;
