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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
                {/* <Link to="/login">Login</Link> */}
                {username ? <p onClick={logout}>Hi {username}, Logout</p> : <Link to="/login">Login</Link>}
            </nav>
        </div>
    )
}

export default header;
