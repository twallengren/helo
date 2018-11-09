import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    var nav;

    if (window.location.pathname === "/") {
        nav = null
    } else {
        nav = <div>

            <Link to="/dashboard">
                <button>Home</button>
            </Link>

            <Link to="/new">
                <button>New Post</button>
            </Link>

            <Link to="/">
                <button>Logout</button>
            </Link>

        </div>
    }

    return (
        <div>
            {nav}
        </div>
    )

}

export default Nav;