import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({isLoggedIn, logout}) {
    return (
        <nav className="Nav">
            <NavLink exact to='/'>
                Jobly
            </NavLink>
            <div className='links'>
                {!isLoggedIn ? 
                    <NavLink to='/login'>
                        Login
                    </NavLink> :              
                     <>   
                        <NavLink to='/companies'>
                            Companies
                        </NavLink>
                        <NavLink to='/jobs'>
                            Jobs
                        </NavLink>
                        <NavLink to='/profile'>
                            Profile
                        </NavLink>
                        <NavLink to='/login' onClick={() => logout()}>
                            Logout
                        </NavLink>
                    </>
                }         
            </div>
        </nav>
    );
}

export default Nav;