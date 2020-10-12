import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            {!localStorage.token &&
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            }
        </div>
    );
}

export default Home;